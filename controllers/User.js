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

exports.editProfile = async (req, res) => {
	res.render("edit-profile", { title: "Update Profile" });
};

exports.postSignup = async (req, res) => {
  const { fullName, email, password } = req.body;

  const existUser = await User.findOne({ email: email });

  if (existUser) {
    res.send("User Already Exist");
  }

  if (!existUser) {
    const newPassword = await hashPassword(password);

    signUpValidation(req, res)
      .then(async () => {
        const newUser = new User({
          fullName,
          phoneNumber: "",
          image: {},
          about: "",
          email,
          facebook: "",
          instagram: "",
          twitter: "",
          password: newPassword,
          date: new Date(),
          currentBalance: "0.00",
          cashOut: "0.00",
          activate: false
        });
        const saveUser = await newUser.save();
        if (saveUser) {
          sendMessage(
            saveUser.fullName,
            saveUser.date,
            saveUser._id
          );

          res.redirect("/activate");
        }

        if (!saveUser) {
          res.send("error saving new user");
        }
      })
      .catch(e => {
        res.send(e.details[0].message);
      });
  }
};