
const express = require("express");
const request = require("request");
const fetch = require("node-fetch");
const router = express.Router();

let fetchError = require("../dataRoutes/fetchError.js");

let date = require("../dataRoutes/createDates.js");
let today = date.today;

let spChartData = require("../dataRoutes/spChartData.js");
let closes = [];

let spEarnings = require("../dataRoutes/earningsData.js");

const spHigh = {
	value: 3025.86,	
	date: "Friday, July 26th 2019"
}
let latestClose = {
	value: "",
	percentage: ""
}

const url = "https://api.stlouisfed.org/fred/";
const criteria = "series/observations?series_id=SP500&";
const timePeriod = "observation_start=" + date.dateStart;
const entrance = "&api_key=" + process.env.fredKey;
const display = "&file_type=json";
const path = url + criteria + timePeriod + entrance + display;


// To home page
router.get("/", (req, res) => {

	fetch(path)
	.then(fetchError)
	.then( response => {
		return response.json();
	}).then( reply => {
//		console.log(reply.observations);
		latestClose.value = (reply.observations[reply.observations.length - 1].value);

		latestClose.value = parseFloat(latestClose.value).toFixed(2);
		spHigh.value = parseFloat(spHigh.value);

		latestClose.percentage = (spHigh.value - latestClose.value) / spHigh.value;
		latestClose.percentage = (latestClose.percentage * 100).toFixed(1);

		for (let i = reply.observations.length - 1 ; i > (reply.observations.length - 7) ; i--) {
			closes.push(reply.observations[i].value);
		}

		let spPlacement = spChartData.prepareChartData(closes);

 		res.render("mainPage", {today, spHigh, latestClose, spPlacement, spEarnings});
	}).catch(error => {
		res.render("errorPage", {error});
		console.error(error);
	})
 });


module.exports = router;