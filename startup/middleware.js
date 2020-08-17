const helmet = require("helmet");
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");

module.exports = app => {
  app.set("view engine", "ejs");

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(helmet());
  app.use(express.static("public"));
  require("../auth/passport")(passport);

  app.use(
    session({
      secret: "secret",
      resave: true,
      saveUninitialized: true
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());
};
