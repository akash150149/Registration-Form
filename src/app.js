const { log } = require("console");
const express = require("express");
const path = require("path");
const app = express();
const handlebars = require("handlebars");
require("./db/conn");
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path));

app.set("view engine","hbs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/", (req, res) => {
  res.send("Error!");
});

//remember that Callback Function takes two Argeuments err and data
//err --> that returns null if there is no error
//data--> the result of operation it returns

app.listen(port, () => {
  console.log(`Server is Running Port No. ${port}`);
});
