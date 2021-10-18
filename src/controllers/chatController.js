const users = require("../models/userModels");
const chats = require("../models/chatModels");

module.exports = class chatRouteController {
  static async chatGetController(req, res) {

    const old_messages = await chats.find().populate("owner_id").sort([["created_at",1]]).limit(20);

    res.render("chat",{
      user: req.user,
     messages:old_messages,
    });
  }
};
