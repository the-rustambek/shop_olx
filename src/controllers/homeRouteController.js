const users = require("../models/userModels");

module.exports = class homeRouteController {
  static async homeGetController(req, res) {
  
    
    res.render("index",{
      user: req.user,

    });
  }
};
