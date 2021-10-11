const users = require("../models/userModels");
const categories  = require("../models/categoryModel");

module.exports = class adsRouteController {
  static async adsGetRouteController(req, res) {
    res.render("add_ads",{
      user: req.user,
      categories: await categories.find(),

    });
  }
};
