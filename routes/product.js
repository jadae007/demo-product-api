const express = require('express');
const router = express.Router();
const producstController = require("../controllers/producstController");

router.get("/",producstController.index)

module.exports = router;