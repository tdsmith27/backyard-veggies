const express = require("express");
const bodyParser = require("body-parser");
const rp = require("request-promise");
const cheerio = require("cheerio");
const Nightmare = require("nightmare");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + "./../public"));

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.get("/crawl", (req, res) => {
  nightmare
    .goto("https://www.seasonalfoodguide.org/alaska/late-august")
    .wait(".card-title")
    .evaluate(() => {
      return [...document.querySelectorAll(".card-title")].map(
        el => el.innerHTML
      );
    })
    .end()
    .then(body => console.log("body", body));
  // crawler here
});

app.get("/seasonal/:state/:season", (req, res) => {
  const nightmare = new Nightmare();

  let state = req.params.state;
  let season = req.params.season;
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
      res.json(seasonal);
    })
    .catch(err => console.log("error in crawler"));
});

app.listen(port, () => console.log("server now listening"));
