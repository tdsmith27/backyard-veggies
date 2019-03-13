const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://tdsmith27:recipes@seasonal-recipe-finder-zg3vg.mongodb.net/test?retryWrites=true"
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
