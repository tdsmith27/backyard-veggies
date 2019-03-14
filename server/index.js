const express = require("express");
const bodyParser = require("body-parser");
const Nightmare = require("nightmare");
const db = require("../db/index");
const Axios = require("axios");
const API = require("../config");
const { excludeChain } = require("../helpers");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + "./../public"));

app.get("/recipes/:ingredients/", (req, res) => {
  let ingredients = req.params.ingredients;
  Axios.get(
    `https://api.edamam.com/search?app_id=${API.id}&app_key=${
      API.key
    }&q=${ingredients}`
  )
    .then(response => {
      console.log("response.data: ", response.data);
      res.json(response.data.hits.slice(0, 11));
    })
    .catch(err => {
      console.log("err: ", err);
    });
});

app.get("/recipes/:ingredients/:excluded", (req, res) => {
  let ingredients = req.params.ingredients;
  let chain = excludeChain(req.params.excluded);
  console.log("chain: ", chain);
  Axios.get(
    `https://api.edamam.com/search?app_id=${API.id}&app_key=${
      API.key
    }&q=${ingredients}${chain}`
  )
    .then(response => {
      console.log("response.data: ", response.data);
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
      if (data.length === 0) {
        const nightmare = new Nightmare();
        nightmare
          .goto(`https://www.seasonalfoodguide.org/${state}/${season}`)
          .wait(".card-title")
          .evaluate(() => {
            return [...document.querySelectorAll(".card-title")].map(
              el => el.innerHTML
            );
          })
          .end()
          .then(seasonal => {
            let doc = { state: state, season: season, veggies: seasonal };
            db.save(doc, (err, data) => {
              if (err) {
                console.log("err: ", err);
              } else {
                res.json(seasonal);
              }
            });
          })
          .catch(err => console.log("error in crawler"));
      } else {
        res.json(data[0].veggies);
      }
    }
  });
});

app.listen(port, () => console.log("server now listening"));
