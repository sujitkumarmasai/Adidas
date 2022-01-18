const express = require("express");

const womenController = require("./controllers/women.controller");
const menController = require("./controllers/men.controller");

const app = express();
app.use(express.json());

app.use("/women", womenController)
app.use("/men", menController)


module.exports = app;