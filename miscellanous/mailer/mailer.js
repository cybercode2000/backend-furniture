const nodemailer = require("nodemailer");
const htmlTemplate = require("./template.js");

require("dotenv").config();

const user = process.env;

module.exports = async (fullName, date, id) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user.Email,
      pass: user.Mail_Password
    }
  });

  let info = await transporter.sendMail({
    from: user.Email,
    to: `${email}`,
    subject: "Welcome to Furniture App Platform!!!!",
    html: `${htmlTemplate(fullName, date, id)}`
  });

  transporter.sendMail(info, err => {
    if (err) {
      console.log("error");
    } else {
      console.log("sent");
    }
  });
};
