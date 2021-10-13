const router = require("express").Router();
const { messagesGetController,messagesPostController } = require("../controllers/messagesController");
const authMiddleWare =  require("../middleware/authMiddleWare")

router.get("/:id",authMiddleWare,messagesGetController
);
router.post("/:id", authMiddleWare, messagesPostController)

module.exports = {
    path: "/messages",
    router,
}