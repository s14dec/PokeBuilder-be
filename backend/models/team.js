const mongoose = require("mongoose");
const Pokemon = require('./pokemon')

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  pokemon: [Pokemon],
  teamId: { type: String }
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
