const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  image: Object,
  about: String,
  phone: String,
  facebook: String,
  twitter: String,
  instagram: String,
  currentBalance: String,
  cashOut: String,
  activate: String
});

const users = mongoose.model('user', userSchema);

module.exports = users;