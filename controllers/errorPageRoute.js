
const express = require("express");
const request = require("request");
const router = express.Router();


router.get("/", (req, res) => {

//	let error = req.body;
//	console.log(req.body);
// 	res.render("errorPage", {error});
 	res.render("errorPage");
 });


module.exports = router;