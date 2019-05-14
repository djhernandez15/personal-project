const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
require("dotenv").config();

module.exports = {
  register: (req, res) => {
    const { username, email, password } = req.body;
    const db = req.app.get("db");

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW
      }
    });

    let mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: `${email}`,
      subject: "Thank you for registering on Brraaap!",
      html: `<h3>Dear ${username},</h3><br>
             <h3>Thank you for registering with Brraaap.info, your first stop shop for MX and offroad apparel!</h3><br>
             <p>Check with us frequently as we have an increasing inventory and weekly discount sales.</p><br>
             <p>Now that you have registered, you can enjoy savings on all your favorite MX apparel brands!</p><br>
             <p>Click <u>here</u> to get a complimentary key tag from Brraaap.info!</p>`
    };

    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log("Error Occurs");
      } else {
        console.log("Email sent");
      }
    });

    db.verifyUser([username])
      .then(users => {
        users.length > 0
          ? res.status(403).json({ error: "USERNAME TAKEN" })
          : bcrypt
              .hash(password, 12)
              .then(newPass => {
                db.registerUser([username, email, newPass])
                  .then(() => {
                    req.session.user = {
                      username,
                      email
                    };
                    res.status(200).json(req.session.user);
                  })
                  .catch(err => console.log(err));
              })
              .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  },
  login: (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");
    db.verifyUser([username])
      .then(user => {
        if (user.length > 0) {
          bcrypt.compare(password, user[0].password).then(matched => {
            if (matched) {
              req.session.user = {
                username: user[0].username,
                cart: []
              };
              res.status(200).json(req.session.user);
            } else {
              res.status(403).json({
                error: "CREDENTIALS_DON'T_MATCH"
              });
            }
          });
        } else {
          res.status(404).json({ error: "USER_DOES_NOT_EXIST" });
        }
      })
      .catch(err => console.log(err));
  },
  loggedIn: (req, res) => {
    res.status(200).json(req.session.user);
  },
  editUser: (req, res) => {
    const db = req.app.get("db");
    const currUsername = req.session.user.username;
    const { newUsername } = req.body;
    db.editUser([newUsername, currUsername]).then(user => {
      req.session.user = user[0].username;
      res.status(200).json(req.session.user);
    });

    // db.editUser([username]).then(
    //   (req.session.user = { username: user[0].username, cart: [] }).then(
    //     res.json(req.session.user)
    //   )
    // );
  }
};
