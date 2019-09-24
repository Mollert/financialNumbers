
const express = require("express");
const request = require("request");
const fetch = require("node-fetch");
const router = express.Router();

let fetchError = require("../dataRoutes/fetchError.js");
let today = require("../dataRoutes/createDate.js");
const spHigh = {
	date: "Friday, July 26th 2019",
	price: 3025.86
}

const url = "https://api.stlouisfed.org/fred/";
const criteria = "series/observations?series_id=SP500&";
const timePeriod = "observation_start=2019-09-20&";
const keyIntro = "api_key=";
const entrance = process.env.fredKey;
const display = "&file_type=json";

const path = url + criteria + timePeriod + keyIntro + entrance + display;




// To home page
router.get("/", (req, res) => {

	fetch(path)
	.then(fetchError)
	.then( response => {
		return response.json();
	}).then( reply => {
//		console.log(reply);
		console.log(reply.observations[1].date);
		console.log(reply.observations[1].value);
 		res.render("mainPage", {today, spHigh});		
//		res.render("dataPage");
	}).catch(error => {
		res.render("errorPage", {error});
		console.error(error);
	})

 //	res.render("mainPage", {today, spHigh});
 });


module.exports = router;