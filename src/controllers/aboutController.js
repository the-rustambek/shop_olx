const users = require("../models/userModels");

module.exports = class aboutRouteController {
  static async aboutGetController(req, res) {
    res.render("about")
  }
};
