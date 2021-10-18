const sessions = require("../models/sessionsModel");
const {
    checkToken
} = require("./jwt");
const {
    messageValidation
} = require("../modules/validations");
const {
    isValidObjectId
} = require("mongoose");
const messages = require("../models/messageModel");

module.exports = function Socket(io) {
    io.on("connection", (socket) => {
        new_user_check(socket);
        send_message_listener(socket);
        public_message_listener(socket);
        // console.log("User connected", socket.id);
    })
}


function public_message_listener(socket){
    socket.on("new_public_message",async (data) =>{
        const socket_session = await sessions.findOne({
            socket_id: socket.id,
        }).populate("owner_id");

        if(!socket_session) return;

        if (!(data.message_text && data.message_text.length >= 2 && data.message_text.length < 1024))
        return;



        await chats.create({
            owner_id:socket_session.owner_id,
            message_text:data.message_text,
        });


        socket.broadcast.emit("new_public_message",{
            owner_name:socket_session.owner_id.name,
            message_text:data.message_text
        })



    })
}



function new_user_check(socket) {
    socket.on("new_connection", async (data) => {
        try {
            let token = await checkToken(data.token);

            const user_session = await sessions.findOneAndUpdate({
                _id: token.session_id,

            }, {
                socket_id: socket.id,
            });

            // console.log(user_session);

            socket.emit("connected", {
                ok: true,
            })
        } catch (error) {
            console.log(error);
        }
    });
}

function send_message_listener(socket) {
    socket.on("send_message", async (data) => {
        const socket_session = await sessions.findOne({
            socket_id: socket.id,
        })
        // console.log(socket_session);


        if (!socket_session) return;

        if (!(data.message_text && data.message_text.length >= 2 && data.message_text.length < 1024))
            return;


        if (!isValidObjectId(data.receiver_id)) return;

        const chat = await messages.create({
            message_text: data.message_text,
            owner_id: socket_session.owner_id,
            receiver_id: data.receiver_id,
        });

        // console.log(chat);
        let receiver_session = await sessions.find({
            owner_id: data.receiver_id,
        })

        // let receiver_session =await messages.create({
        //     message_text:data.message_text,
        //     owner_id:socket_session.owner_id,
        //     receiver_id:data.receiver_id,
        // });

        receiver_session = await receiver_session.map((s) => s.socket_id);

        receiver_session = await receiver_session.filter((s) => s);
        socket.io(receiver_session).emit("new_message", data.message_text);
    });
}