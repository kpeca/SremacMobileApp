const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const match = new Schema({
  homeName: {type: String, required: true},
  homeLogo: {type: String, required: true},
  awayName: {type: String, required: true},
  awayLogo: {type: String, required: true},
  date: {type: String, required: true},
  location: {type: String, required: true}
})

const Match = mongoose.model("Match", match)

module.exports = Match;