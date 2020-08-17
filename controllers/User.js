const User = require("../models/User");
const hashPassword = require("../miscellanous/hash");
const { signUpValidation } = require("../validations/user");
const sendMessage = require("../miscellanous/mailer/mailer");

/*

	Here I define functions to be used in my routes for user related actions

*/
exports.getSignUp = async (req, res) => {
  res.render("index", { title: "Home" });
};

exports.getLogin = async (req, res) => {
  res.render("login", { title: "Login" });
};

exports.logOut = async (req, res) => {
  req.logOut();
  res.redirect("/login");
};

exports.activate = async (req, res) => {
  res.render("Activate", { title: "Activate your Account" });
};

exports.dashboard = async (req, res) => {
  res.render("dashboard", { title: "Dashboard" });
};

exports.forgotPassword = async (req, res) => {
  res.render("forgot-password", { title: "Forgot Password" });
};

exports.changePassword = async (req, res) => {
	res.render("change-password", { title: "Change Password" });
};