const db = require("../models");

// index route
const index = (req, res) => {
  db.Pokemon.find({}, (error, pokemon) => {
    if (error) return res.status(404).json({ error: error.message });
    return res.status(200).json({
      pokemon,
      requestedAt: new Date().toLocaleString(),
    });
  });
};

// index route
const getById = (req, res) => {
  db.Pokemon.find({ recipeId: req.params.id }, (error, pokemon) => {
    if (error) return res.status(404).json({ error: error.message });
    return res.status(200).json({
      pokemon,
      requestedAt: new Date().toLocaleString(),
    });
  });
};

// review create route
const create = (req, res) => {
  db.Pokemon.create(req.body, (error, createPokemon) => {
    if (error) return res.status(404).json({ error: error.message });
    return res.status(200).json(createPokemon);
  });
};

// destroy route
const destroy = (req, res) => {
  db.Pokemon.findByIdAndDelete(req.params.id, (error, deletedPokemon) => {
    if (!deletedPokemon) return res.status(400).json({ error: "Pokemon not found" });
    if (error) return res.status(400).json({ error: error.message });
    return res.status(200).json({ message: `Pokemon ${deletedPokemon.name} deleted successfully` });
  });
};

// update route
const update = (req, res) => {
  db.Pokemon.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true },
    (err, updatedPokemon) => {
      if (err) return res.status(400).json({ error: err.message });
      return res.status(200).json(updatedPokemon);
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
