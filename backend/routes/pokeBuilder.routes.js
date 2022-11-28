const express = require("express");
const router = express.Router();

const ctrls = require("../controllers");

// Team Routes
router.get("/", ctrls.team.index);
router.get("/:id", ctrls.team.getById);
router.post("/:id", ctrls.team.create);
router.delete("/:id", ctrls.team.destroy);
router.put("/:id", ctrls.team.update)

module.exports = router;
