const bcrypt = require("bcryptjs");
module.exports = {
  register: (req, res) => {
    const { username, email, password } = req.body;
    const db = req.app.get("db");
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
  }
};
