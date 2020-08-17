const express = require('express');
const passport = require('passport');
const authenticate = require('../miscellanous/authenticate')
const router = express.Router();

const { index, about, search } = require('../controllers/General');
const { getSignUp, getLogin, logOut, activate, dashboard, forgotPassword, changePassword } = require('../controllers/User');
const { newFurniture, showFurniture } = require('../controllers/Furniture');

/*
	Respond to /
	Displays the home page
*/
router.get('/', index);

/*
	Respond to /about
	Displays the about page
*/
router.get("/about", about);

/*
	Respond to /login
	Here the user sees the Login page
*/
router.get("/login", authenticate, getLogin);

/*
	Respond to /register
	Here the user sees the Registration page
*/
router.get("/register", authenticate, getSignUp);

/*
	Respond to /activate
	Displays the simple page where the user gets to activate their profile
*/
router.get("/activate/:id", authenticate, activate);

/*
	Respond to /dashboard
	The dynamically generated user page which displays details about the user
*/
router.get("/dashboard", authenticate, dashboard);

/*
	Respond to /forgot-password
	The page displayed when the user forgets their password
*/
router.get("/forgot-password", authenticate, forgotPassword);

/*
	Searches the entire site for entries and returns view with results
*/
router.post("/search", search);

/*
	Respond to /pay
	The page where the user will pay
*/
router.get("/pay");

/*
	The user can view reciepts and print 'em from here
*/
router.get("/pay/receipt")

/*
	The user can add a new furniture to be sold
*/
router.get("/furniture/new", authenticate, newFurniture);

/*
	Displays a single furniture page
*/
router.get("/furniture/:id", authenticate, showFurniture);

/*
	Displays a simple form for user mail to change password
*/
router.get("/change-password", changePassword);
router.get("/dashboard/update");
router.get("/admin");

/*
	User data is validated and registered here
*/
router.post(
    "/register",
    authenticate,
    passport.authenticate("local", {
        successRedirect: "/user/overview",
        failureRedirect: "/login",
        failureFlash: true
  })
);

/*
	User session is ended and user is logged out
*/
router.get("/logout", authenticate, logOut);

module.exports = router;