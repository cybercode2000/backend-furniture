const express = require('express');
const authenticate = require('../miscellanous/authenticate')
const router = express.Router();

const { index, getSignUp, getLogin, logOut } = require('../controllers/General');


// Respond to /
router.get('/', index);

router.get("/login", authenticate, getLogin);

router.get("/register", authenticate, getSignUp);

router.post(
    "/register",
    authenticate,
    passport.authenticate("local", {
        successRedirect: "/user/overview",
        failureRedirect: "/login",
        failureFlash: true
  })
);

router.get("/logout", authenticate, logOut);

module.exports = router;