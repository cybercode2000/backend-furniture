// Import packages
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const PagesRoutes = require('./routes/PagesRoutes');

// Initiate the app
const app = express();

// Link to mongoDB atlas
const dbURI = 'mongodb+srv://young:ethene20@cluster0.hgbre.mongodb.net/furniture_app?retryWrites=true&w=majority';
mongoose.connect(dbURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then((result) => {
	console.log('Connected to DB and listening for requests on PORT 3000');
	app.listen(3000);
})
.catch((err) => console.log(err));

// Register view engine
app.set('view engine', 'ejs');

// Set Up static files
app.use(express.static('public'));

// Using morgan to log status and details
app.use(morgan('dev'));

app.use('/', PagesRoutes);