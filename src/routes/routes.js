const homeRoute = require("../routes/homeRoute");
const userRoute = require("../routes/userRoute");
const categoryRoute= require("./categoryRoute");
const adsRoute= require("../routes/adsRoute");
const aboutRoute = require("../routes/aboutRoute");
const messagesRoute = require("./messagesRoute");

module.exports = (app) => {
  app.use(homeRoute.path, homeRoute.router);
  app.use(userRoute.path, userRoute.router);
  app.use(categoryRoute.path, categoryRoute.router);
  app.use(adsRoute.path, adsRoute.router);
  app.use(aboutRoute.path, aboutRoute.router);
  app.use(messagesRoute.path, messagesRoute.router)

};
