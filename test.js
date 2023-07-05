//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser"); //to use body-parser
const ejs = require("ejs"); //to use ejs
const mongoose = require("mongoose"); //to use mongoose

const app = express(); //creating a new express app

app.use(express.static("public")); //to use static files like css, images, etc
app.set("view engine", "ejs"); //to use ejs
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/userDB", { useNewUrlParser: true });

const userSchema = {
  email: String,
  password: String
};

const User = new mongoose.model("User", userSchema);

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", function (req, res) {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });

  newUser
    .save()
    .then(() => {
      res.render("secrets");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/login", function (req, res) {
  const userame = req.body.username;
  const Password = req.body.password;

  
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
a