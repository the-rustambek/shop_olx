const router = require("express").Router();
const { messagesGetController } = require("../controllers/messagesController");
const authMiddleWare =  require("../middleware/authMiddleWare")

router.get("/:id",authMiddleWare,messagesGetController
);


module.exports = {
    path: "/messages",
    router,
}