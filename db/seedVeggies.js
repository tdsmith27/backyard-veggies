const Nightmare = require("nightmare");
const db = require("./index");

const states = [
  "alabama",
  "alaska",
  "arizona",
  "arkansas",
  "california",
  "colorado",
  "connecticut",
  "delaware",
  "washington-dc",
  "florida",
  "georgia",
  "hawaii",
  "idaho",
  "illinois",
  "indiana",
  "iowa",
  "kansas",
  "kentucky",
  "louisiana",
  "maine",
  "maryland",
  "massachusetts",
  "michigan",
  "minnesota",
  "mississippi",
  "missouri",
  "montana",
  "nebraska",
  "nevada",
  "new-hampshire",
  "new-jersey",
  "new-mexico",
  "new-york",
  "north-carolina",
  "north-dakota",
  "ohio",
  "oklahoma",
  "oregon",
  "pennsylvania",
  "rhode-island",
  "south-carolina",
  "south-dakota",
  "tennessee",
  "texas",
  "utah",
  "vermont",
  "virginia",
  "washington",
  "west-virginia",
  "wisconsin",
  "wyoming"
];
const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december"
];

// forEach state
//  forEach month
//    search db, if no results
//      nightmare, save to db

async function seedAll() {
  for (let state of states) {
    for (let month of months) {
      let season = `early-${month}`;
      await seed(state, season);
    }
  }
  console.log("all done");
}

const scrape = async (state, season) => {
  const nightmare = new Nightmare();
  let seasonal = await nightmare
    .goto(`https://www.seasonalfoodguide.org/${state}/${season}`)
    .wait(".card-title")
    .evaluate(() => {
      return [...document.querySelectorAll(".card-title")].map(
        el => el.innerHTML
      );
    })
    .end();
  return seasonal;
};

const seed = async (state, season) => {
  let seasonal = await db.findP(state, season);
  if (seasonal.length === 0) {
    console.log(`${state} - ${season} is not in there`);
    seasonal = await scrape(state, season);
    let doc = { state: state, season: season, veggies: seasonal };
    db.saveP(doc);
  }
  return seasonal;
};

seedAll();
// .then(seasonal => {
//   let doc = { state: state, season: season, veggies: seasonal };
//   // console.log("doc: ", doc);
//   db.save(doc, (err, data) => {
//     if (err) {
//       console.log("err: ", err);
//     } else {
//       console.log(`${state}, ${season} saved to db`);
//     }
//   });
// })
// .catch(err => console.log("error in crawler"));

// async (err, data) => {
//   if (err) {
//     console.log("err: ", err);
//   } else if (data.length === 0) {
//     const nightmare = new Nightmare();
//     let seasonal = await nightmare
//       .goto(`https://www.seasonalfoodguide.org/${state}/${season}`)
//       .wait(".card-title")
//       .evaluate(() => {
//         return [...document.querySelectorAll(".card-title")].map(
//           el => el.innerHTML
//         );
//       })
//       .end();
//     console.log("seasonal: ", seasonal);
//   } else {
//     console.log(`Ingredients for ${state} in ${season} already in db`);
//   }
// });
