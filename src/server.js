
const express = require('express');
const PORT = process.env.PORT || 8080;
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require('path');
const routes = require('./routes/routes');
// const mongo = require("./modules/mongoose")
// const authUserMiddleware = require("./middlewares/authUserMiddleware")


async function server(mode){
    const app = express();
    app.listen(PORT, (_) => console.log(`Server ready  at ${PORT}`));
    try {    
    app.use(express.json());
    app.use(express.urlencoded({
        extended:true,
    }));
    app.use(cookieParser());
    
    app.use("/public", express.static(path.join(__dirname, "public")));
    // app.use(authUserMiddleware)
    // await mongo()
    if(mode == "DEV"){
        app.use(morgan("dev"));
    }




    app.set("view engine", "ejs"); 
    app.set("views",path.join(__dirname,"views"));
    
   } finally { 
       routes(app);
   }
}

module.exports = server;
