const User = require("../models/User");
const hashPassword = require("../miscellanous/hash");
const { signUpValidation } = require("../validations/user");
const sendMessage = require("../miscellanous/mailer/mailer");

/*

	Here I define functions to be used in my routes for general purpose pages like index, about and contact

*/
exports.newFurniture = (req, res) => {
	res.render('new-furniture', { title: "New Furniture" });
};

exports.showFurniture = (req, res) => {
	res.render('single-furniture', { title: "Single Furniture" });
};

exports.saveNewFurniture = (req, res) => {
	// Code goes here
};