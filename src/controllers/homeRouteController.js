const users = require("../models/userModels");

module.exports = class homeRouteController {
  static async homeGetController(req, res) {
    const user =  await users.findOne({
      name:"Muhammad",
    })
    console.log(user);
    res.render("index")
    
    // res.render("index",{
    //   user: req.user,

    // });
  }
};
