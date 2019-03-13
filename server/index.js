const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + "./../public"));

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => console.log("server now listening"));
