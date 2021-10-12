const mongoose =  require("mongoose");

const sessionsSchema = new mongoose.Schema({
    user_agent:{
        type:String,
        required:true,
    },
    owner_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
    },
    created_at:{
    type:Date,
    default:new Date(),
},

});

const sessions = mongoose.model("sessions",sessionsSchema);

module.exports =  sessions;