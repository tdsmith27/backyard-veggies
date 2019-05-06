const express = require("express");
const bodyParser = require("body-parser");
const Nightmare = require("nightmare");
const db = require("../db/index");
const Axios = require("axios");
const { excludeChain } = require("../helpers");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + "./../public"));

app.get("/recipes/:ingredients/", (req, res) => {
  let ingredients = req.params.ingredients;
  Axios.get(
    `https://api.edamam.com/search?app_id=${process.env.API_ID}&app_key=${
      process.env.API_KEY
    }&q=${ingredients}`
  )
    .then(response => {
      res.json(response.data.hits.slice(0, 8));
    })
    .catch(err => {
      console.log("err: ", err);
    });
});

app.get("/recipes/:ingredients/:excluded", (req, res) => {
  let ingredients = req.params.ingredients;
  let chain = excludeChain(req.params.excluded);
  Axios.get(
    `https://api.edamam.com/search?app_id=${API.id}&app_key=${
      API.key
    }&q=${ingredients}${chain}`
  )
    .then(response => {
      res.json(response.data.hits.slice(0, 11));
    })
    .catch(err => {
      console.log("err: ", err);
    });
});

app.get("/seasonal/:state/:season", (req, res) => {
  let state = req.params.state;
  let season = req.params.season;

  db.find(state, season, (err, data) => {
    if (err) {
      console.log("err: ", err);
    } else {
      res.json(data[0].veggies);
    }
  });
});

app.listen(port, () => console.log("server now listening"));
