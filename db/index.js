const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("database connection established")
);

const seasonalSchema = mongoose.Schema({
  state: "string",
  season: "string",
  veggies: ["string"]
});

const Seasonal = mongoose.model("Seasonal", seasonalSchema);

const save = (doc, cb) => {
  let seasonal = new Seasonal(doc);

  seasonal
    .save()
    .then(data => cb(null, data))
    .catch(err => cb(err));
};

const find = (state, season, cb) => {
  const query = Seasonal.find({ state: state, season: season });

  query
    .exec()
    .then(response => cb(null, response))
    .catch(err => cb(err));
};

module.exports.save = save;
module.exports.find = find;
