require("dotenv").config();
const massive = require("massive");
const express = require("express");
const session = require("express-session");
const authController = require("./controllers/authController");
const productsController = require("./controllers/productsController");
const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;

const app = express();
app.use(express.json());

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("Database connected");
  })
  .catch(err => {
    console.log(err);
  });

app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

app.post("/api/register", authController.register);
app.post("/api/login", authController.login);
// app.get("/api/brands", authController.getBrand);
// app.get("/api/images", authController.getImage);
// app.get('/api/names', authController.getName);
app.get("/api/helmets", productsController.getHelmets);
app.get("/api/goggles", productsController.getGoggles);

app.listen(SERVER_PORT, () => console.log(`Listening on Port ${SERVER_PORT}`));
