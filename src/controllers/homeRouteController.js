const users = require("../models/userModels");
const categories  = require("../models/categoryModel");

module.exports = class homeRouteController {
  static async homeGetController(req, res) {
    res.render("index",{
      user: req.user,
      categories: await categories.find(),

    });
  }
};
