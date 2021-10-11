require("dotenv").config();
require("./test")

const server = require('./src/server');

server(process.env.MODE)