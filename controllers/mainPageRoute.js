
const express = require("express");
const request = require("request");
const fetch = require("node-fetch");
const router = express.Router();

let fetchError = require("../dataRoutes/fetchError.js");

let date = require("../dataRoutes/createDates.js");
let today = date.today;
// For S&P 500
let spChartData = require("../dataRoutes/spChartData.js");
let closes = [];
// For S&P Earnings
let spEarnings = require("../dataRoutes/earningsData.js");
// For Fed Funds Rate
let fedFundsData = require("../dataRoutes/fedFundsRateData.js");
// For Yield Curve
let inversions = require("../dataRoutes/yieldCurveData.js");
// For CPI
let cpiArray = require("../dataNumbers/cpi.js");
// For Employment
let unemployment = require("../dataNumbers/unemployment.js");
let unemployData = require("../dataRoutes/unemploymentData.js");


const spHigh = {
	value: 3168.80,	
	date: "Friday, December 13th 2019"
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

// For the S&P Earnings Pallet
		let spPlacement = spChartData.prepareChartData(closes);
// For Fed Funds Rate Pallet
//		console.log(fedFundsData);
// For Yield Curve Pallet
//		console.log(inversions);
// For CPI Pallet
		let cpiYearly = {
			thisOne: cpiArray[0].last12Months.toFixed(2),
			oneAgo: cpiArray[10].last12Months.toFixed(2),
			twoAgo: cpiArray[22].last12Months.toFixed(2),
			threeAgo: cpiArray[34].last12Months.toFixed(2)
		}

// For Employment Pallet
		let jobData = {
			theRate: unemployment[0].rate,
			theAverage: unemployData.currentAverage,
			theGap: unemployData.rateGap
		}

 		res.render("mainPage", {today, spHigh, latestClose, spPlacement, spEarnings, fedFundsData, inversions, cpiYearly, jobData});

	}).catch(error => {
		res.render("errorPage", {error});
		console.error(error);
	})
 });


module.exports = router;