const fs = require("fs");
const path = require("path");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

// @desc	Get specific company resource topic
// @route	GET files/download/:folder/:filename
// @access	public
exports.downloadSource = asyncHandler(async (req, res, next) => {
	const filepath = `${__dirname}/../public/${req.params.folder}/${req.params.filename}`;
	// Check file existance
	let file = fs.existsSync(filepath);

	// If file not exist
	if (!file) {
		return res.send("File not found");
	}
	res.download(filepath);
});

// @desc	Get specific company resource topic
// @route	GET files/view/:folder/:filename
// @access	public
exports.viewSource = asyncHandler(async (req, res, next) => {
	const filepath = `${__dirname}/../public/${req.params.folder}/${req.params.filename}`;
	// Check file existance
	let file = fs.existsSync(filepath);

	// If file not exist
	if (!file) {
		return res.send("File not found");
	}
	res.sendFile(path.resolve(filepath));
});
