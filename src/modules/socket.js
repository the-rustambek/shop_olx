const sessions = require("../models/sessionsModel");
const { checkToken } = require("./jwt");

module.exports = function Socket(io){
    io.on("connection", (socket) =>{
        new_user_check(socket);
        send_message_listener(socket);
    })
}

function new_user_check(socket){
    socket.on("new_connection", async (data) =>{
        try{
            let token = await checkToken(data.token);
            
            const user_session = await sessions.findOneAndUpdate({
                _id:token.session_id,

            },
            {
                socket_id:socket.id,
            }
            );

            // console.log(user_session);

            socket.emit("connected",{
                ok:true,
            })
        }
        catch(error){
            console.log(error);
        }
    });
}

function send_message_listener(socket){
    socket.on("send_message",async(data) =>{
const socket_session = await sessions.findOne({
    socket_id:  socket.id,
})
// console.log(socket_session);


if(!socket_session) return;
        // console.log(data);
    });
}