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
  image: {
    type: Object,
    required: false
  },
  about: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  facebook: {
    type: String,
    required: false
  },
  twitter: {
    type: String,
    required: false
  },
  instagram: {
    type: String,
    required: false
  },
  currentBalance: {
    type: String,
    required: false
  },
  cashOut: {
    type: String,
    required: false
  },
  activate: {
    type: String,
    required: false
  }
});

const users = mongoose.model('user', userSchema);

module.exports = users;