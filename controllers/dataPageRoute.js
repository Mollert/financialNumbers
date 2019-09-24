
const express = require("express");
const request = require("request");
const fetch = require("node-fetch");
const router = express.Router();


let fetchError = require("../dataRoutes/fetchError.js");


router.get("/", (req, res) => {

	const url = "https://api.stlouisfed.org/fred/";
	const criteria = "series/observations?series_id=SP500&";
	const timePeriod = "observation_start=2019-09-20&";
	const keyIntro = "api_key=";
	const entrance = process.env.fredKey;
	const display = "&file_type=json";

	let path = url + criteria + timePeriod + keyIntro + entrance + display;

//	let path = "https://api.stlouisfed.org/fred/category/related?category_id=32073&api_key=" + entrance + "&file_type=json";
//	let path = "https://api.stlouisfed.org/fred/series/observations?series_id=SP500&observation_start=2019-09-20&api_key=" + entrance + "&file_type=json";

/*
	fetch(path)
	.then(fetchError)
	.then( response => {
		return response.json();
	}).then( reply => {
		console.log(reply);
		console.log(reply.observations[1].date);
		console.log(reply.observations[1].value);
		res.render("dataPage");
	}).catch(error => {
		res.render("errorPage", {error});
		console.error(error);
	})
*/
 	res.render("dataPage");
 });


module.exports = router;
