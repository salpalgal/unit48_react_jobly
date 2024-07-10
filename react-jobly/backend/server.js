"use strict";

const app = require("./app");

// const server = require("./app")
const { PORT } = require("./config");

const hostname = '127.0.0.1'

const port = '<proxyport>'
app.listen(PORT,hostname,function () {
  console.log(`Started on http://localhost:${PORT}`);}
);

