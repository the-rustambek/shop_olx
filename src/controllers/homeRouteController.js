const users = require("../models/userModels");

module.exports = class homeRouteController {
  static async homeGetController(req, res) {
    const user = await users.findOne({
      name: "Muhammad",
    });
    console.log(user, "salomlar hammaga");
    res.render("index");
  }
};
