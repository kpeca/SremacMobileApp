const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matches = new Schema({
  homeName: {type: String, required: true},
  homeLogo: {type: String, required: true},
  awayName: {type: String, required: true},
  awayLogo: {type: String, required: true},
  date: {type: String, required: true},
  location: {type: String, required: true}
})

const Matches = mongoose.model("Matches", matches)

module.exports = Matches;