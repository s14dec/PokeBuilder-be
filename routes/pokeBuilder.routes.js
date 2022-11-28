const express = require("express");
const router = express.Router();

const ctrls = require("../controllers");

// Team Routes
router.get("/", ctrls.pokeBuilder.index);
router.get("/:id", ctrls.pokeBuilder.getById);
router.post("/:id", ctrls.pokeBuilder.create);
router.delete("/:id", ctrls.pokeBuilder.destroy);
router.put("/:id", ctrls.pokeBuilder.update);

module.exports = router;
