const users = require("../models/userModels");


module.exports = class messagesRouteController {
  static async messagesGetController(req, res) {
    res.send("Ok");
  }
};
