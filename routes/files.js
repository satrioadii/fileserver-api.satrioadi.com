const express = require("express");

const router = express.Router();

const { downloadSource, viewSource } = require("../controllers/files");

// Download a file
router.route("/download/:folder/:filename").get(downloadSource);

// View a file
router.route("/view/:folder/:filename").get(viewSource);

module.exports = router;
