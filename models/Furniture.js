const mongoose = require("mongoose");

const furnitureSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  condition: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  image: Object,
  about: String,
  userPhone: String
});

const furniture = mongoose.model('furniture', furnitureSchema);

module.exports = furniture;