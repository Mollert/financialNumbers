
const express = require("express");
const request = require("request");
const fetch = require("node-fetch");
const router = express.Router();

let fetchError = require("../dataRoutes/fetchError.js");

let date = require("../dataRoutes/createDates.js");
let today = date.today;
let past = date.toWeekDay;
// For S&P 500
let spChartData = require("../dataRoutes/spChartData.js");
// For S&P Earnings
let lowToCurrent = require("../dataRoutes/offHigh.js");
// How far is S&P from YTD and off low
let spEarnings = require("../dataRoutes/earningsData.js");
// For Leading Economic Index
let economicIndex = require("../dataRoutes/leadingIndexData.js");
// For Consumer Confidence Index
let confidenceData = require("../dataRoutes/confidenceData.js");
// For Fed Funds Rate
let fedFundsData = require("../dataRoutes/fedFundsRateData.js");
// For Yield Curve
let inversions = require("../dataRoutes/yieldCurveData.js");
// This was created in order to run the gdpData file.
//let justForNumbers = require("../dataRoutes/gdpData.js");
//console.log(justForNumbers);
// For CPI
let cpiYearly = require("../dataRoutes/cpiData.js");
// For Employment
let unemployment = require("../dataNumbers/unemployment.js");
let unemployData = require("../dataRoutes/unemploymentData.js");
// For Gold
let displayGLD = require("../dataRoutes/gldData.js");


const spHigh = {
	value: 3580.84,
	date: "Wednesday, September 2nd 2020"
}

let latestClose = {
	date: "",
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
		// Capture closing array
		let group = reply.observations;
		// Find new high if there is one
		for (let i = 0 ; i < group.length ; i++) {
			if (group[i].value > spHigh.value) {
				spHigh.value = group[i].value;
				spHigh.date = date.toReadableTime(group[i].date);
			}
		}
		// Capture latest close and figure percentage from high
		for (let i = group.length - 1 ; i >= 0  ; i--) {
			if (group[i].value !== ".") {
				latestClose.value = (group[i].value);
				latestClose.date = (group[i].date);				
				i = 0;
			}
		}
		latestClose.date = past(latestClose.date);
		latestClose.value = parseFloat(latestClose.value).toFixed(2);
		spHigh.value = parseFloat(spHigh.value);
		latestClose.percentage = (spHigh.value - latestClose.value) / spHigh.value;
		latestClose.percentage = (latestClose.percentage * 100).toFixed(1);
		// Capture last six closes and package in array.  Six to find five differences
		let closes = [];
		let times = 0;
		for (let i = group.length - 1 ; i >= 0  ; i--) {
			if (group[i].value !== ".") {
				closes.push(group[i].value);
				times++;
			}
			if (times === 6) {
				i = 0;
			}
		}

// For the S&P Earnings Pallet
		let spPlacement = spChartData.prepareChartData(closes);
// For S&P low to high Pallet
		spFrom = lowToCurrent(latestClose.value);
// For Economic Index Pallet
//		console.log(economicIndex);	
// For Confidence Pallet
//		console.log(confidenceData);
// For Fed Funds Rate Pallet
//		console.log(fedFundsData);
// For Yield Curve Pallet
//		console.log(inversions);
// For CPI Pallet
//		console.log(cpiYearly);
// For Employment Pallet
		let jobData = {
			theRate: unemployment[0].rate,
			theAverage: unemployData.currentAverage,
			theGap: unemployData.rateGap
		}

 		res.render("mainPage", {today, spHigh, latestClose, spPlacement, spFrom, spEarnings, economicIndex, confidenceData, fedFundsData, inversions, cpiYearly, jobData, displayGLD});

	}).catch(error => {
		res.render("errorPage", {error});
		console.error(error);
	})
 });


module.exports = router;