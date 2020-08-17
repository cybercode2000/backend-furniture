const express = require('express');
const router = express.Router();

const { index, getSignUp, getLogin } = require('../controllers/General');


// Respond to /
router.get('/', index);

router.get("/login", getLogin);

router.get("/register", getSignUp);

module.exports = router;