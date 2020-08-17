/*

	Here I define functions to be used in my routes for general purpose pages like index, about and contact

*/
exports.index = async (req, res) => {
	res.render('index', { title: 'Home' })
};

exports.getSignUp = async (req, res) => {
  res.render("index", { title: "Home" });
};

exports.getLogin = async (req, res) => {
  res.render("login", { title: "Login | Furniture App" });
};

