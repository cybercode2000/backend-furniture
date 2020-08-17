const helmet = require("helmet");
const express = require("express");
const bodyParser = require("body-parser");

module.exports = app => {
  app.set("view engine", "ejs");

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(helmet());
  app.use(express.static("public"));
    
};
