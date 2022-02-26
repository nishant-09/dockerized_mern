const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const Mongo = require("./libs/mongo");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

const port = 5014;

app.get("/", (req, res) => {
  res.json("Yes this is backend message");
});

new Mongo();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
