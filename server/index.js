const express = require("express");
const bodyParser = require("body-parser");
const rp = require("request-promise");
const cheerio = require("cheerio");
const Nightmare = require("nightmare");
const db = require("../db/index");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + "./../public"));

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
