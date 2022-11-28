const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: { type: String, required: true },
  teamList: { type: String },
  teamId: { type: String }
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
