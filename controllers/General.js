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

exports.search = async (req, res) => {
  res.render("search", { title: "Search" });
};