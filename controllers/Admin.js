const User = require("../models/User");
const hashPassword = require("../miscellanous/hash");
const { signUpValidation } = require("../validations/user");
const sendMessage = require("../miscellanous/mailer/mailer");

/*

	Here I define functions to be used in my routes for user related actions

*/
exports.getAdmin = (req, res) => {
	res.render("admin", { title: "Admin Dashboard" });
};