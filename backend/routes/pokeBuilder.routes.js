const express = require("express");
const router = express.Router();

const ctrls = require("../controllers");

// Pokemon Routes
router.get("/", ctrls.pokemon.index);
router.get("/:id", ctrls.pokemon.getById);
router.post("/:id", ctrls.pokemon.create);
router.delete("/:id", ctrls.pokemon.destroy);
router.put("/:id", ctrls.pokemon.update);

// Team Routes
router.get("/team", ctrls.team.index);
router.get("/team/:id", ctrls.team.getById);
router.post("/team/:id", ctrls.team.create);
router.delete("/team/:id", ctrls.team.destroy);
router.put("/team/:id", ctrls.team.update)



module.exports = router;
