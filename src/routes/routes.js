const homeRoute = require("../routes/homeRoute");
const userRoute = require("../routes/userRoute");
const categoryRoute= require("./categoryRoute");
const adsRoute= require("../routes/adsRoute");


module.exports = (app) => {
  app.use(homeRoute.path, homeRoute.router);
  app.use(userRoute.path, userRoute.router);
  app.use(categoryRoute.path, categoryRoute.router);
  app.use(adsRoute.path, adsRoute.router);
};
