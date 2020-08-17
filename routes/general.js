const express = require('express');
const passport = require('passport');
const authenticate = require('../miscellanous/authenticate')
const router = express.Router();

const { index, getSignUp, getLogin, logOut, activate, dashboard } = require('../controllers/General');


// Respond to /
router.get('/', index);

router.get("/login", authenticate, getLogin);

router.get("/register", authenticate, getSignUp);

router.get("/activate", authenticate, activate);

router.get("/dashboard", authenticate, dashboard);

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