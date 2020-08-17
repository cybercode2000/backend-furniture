/*

	Here I define functions to be used in my routes for general purpose pages like index, about and contact

*/
const index = (req, res) => {
	res.render('index', { title: 'Home' })
};

module.exports = index;