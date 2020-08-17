const User = require("../models/User");
const hashPassword = require("../miscellanous/hash");
const { signUpValidation } = require("../validations/user");
const sendMessage = require("../miscellanous/mailer/mailer");

/*

	Here I define functions to be used in my routes for general purpose pages like index, about and contact

*/
exports.index = async (req, res) => {
  res.render("index", { title: "Home" });
};

exports.about = async (req, res) => {
  res.render("about", { title: "About" });
};

exports.search = async (req, res) => {
  res.render("search", { title: "Search" });
};