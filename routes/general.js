const express = require('express');
const router = express.Router();

const { index, getSignUp, getLogin } = require('../controllers/General');


// Respond to /
router.get('/', index);

router.get("/login", getLogin);

router.get("/register", getSignUp);

router.post(
  "/register",
  passport.authenticate("local", {
    successRedirect: "/user/overview",
    failureRedirect: "/login",
    failureFlash: true
  })
);

module.exports = router;