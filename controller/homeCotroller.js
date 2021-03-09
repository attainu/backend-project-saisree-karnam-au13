const menu = require("../model/menu");

function homeController() {
	return {
		async index(req, res) {
			const pizzas = await menu.find();
			return res.render("home", { pizzas: pizzas });
		},
	};
}

module.exports = homeController;
