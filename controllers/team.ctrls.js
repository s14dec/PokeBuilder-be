const db = require("../models");

// index route
const index = (req, res) => {
  db.Team.find({}, (error, team) => {
    if (error) return res.status(404).json({ error: error.message });
    return res.status(200).json({
      team,
      requestedAt: new Date().toLocaleString(),
    });
  });
};

// index route
const getById = (req, res) => {
    db.Team.find({ teamId: req.params.id }, (error, team) => {
      if (error) return res.status(404).json({ error: error.message });
      return res.status(200).json({
        team,
        requestedAt: new Date().toLocaleString(),
      });
    });
  };

// create route
const create = (req, res) => {
  db.Team.create(req.body, (error, createTeam) => {
    if (error) return res.status(404).json({ error: error.message });
    return res.status(200).json(createTeam);
  });
};

// destroy route
const destroy = (req, res) => {
  db.Team.findByIdAndDelete(req.params.id, (error, deletedTeam) => {
    if (!deletedTeam) return res.status(400).json({ error: "Team not found" });
    if (error) return res.status(400).json({ error: error.message });
    return res.status(200).json({ message: `Team deleted successfully` });
  });
};

// update route
const update = (req, res) => {
  db.Team.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true },
    (err, updatedTeam) => {
      if (err) return res.status(400).json({ error: err.message });
      return res.status(200).json(updatedTeam);
    }
  );
};

module.exports = {
  index,
  create,
  destroy,
  update,
  getById,
};
