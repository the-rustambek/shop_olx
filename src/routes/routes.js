const homeRoute = require("../routes/homeRoute");
const userRoute = require("../routes/userRoute");


module.exports = (app) =>{
    app.use(homeRoute.path, homeRoute.router);
    app.use(userRoute.path, userRoute.router);
};