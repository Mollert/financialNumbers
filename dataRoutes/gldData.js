
let spPrice = require("../dataNumbers/spPrice.js");
let gldPrice = require("../dataNumbers/gldPrice.js");
let gldSPratio = require("../dataNumbers/gldSPratio.js");

const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


/*
let gspRatio = 0;
for( let i = 0 ; i < 6 ; i++ ) {
	gspRatio = 	0;
	if (spPrice[i].date === gldPrice[i].date) {
		gspRatio = gldPrice[i].price / spPrice[i].price;
		console.log(gldSPratio[i].date + " the ratio was " + gspRatio.toFixed(2));
	}
}
*/

// Find the month from gldSPratio[?].date sent
const whatMonth = (combo) => {
	let monthNum = Number(combo.toString().slice(-2));
	return monthsOfYear[monthNum-1];
}

// Seperate year from month and package all elements into string
const separateYM = (batch) => {
	let list = "";

	for ( let i = 0 ; i < batch.length ; i++ ) {
		if (i === 0) {
			list += whatMonth(batch[0]);
		} else {
			list += ", " + whatMonth(batch[i]);
		}
		list += " " + (batch[i]).toString().slice(0, 4);
	}
	return list;
}


let accumulate = 0;
let halfYear = 0;

let theEnd = Number((gldSPratio[0].date).toString().slice(-2));

let backYear = 0;

let high = 0;
let highDate = [];
let low = 2;
let lowDate = [];


// Get the last six month average of the ratio
for ( let i = 0 ; i < 6 ; i++ ) {
	accumulate = accumulate + gldSPratio[i].ratio;
}
halfYear = accumulate / 6;

// What is the year which the high/low draws from
backYear = (gldSPratio[theEnd+36-1].date).toString().slice(0, 4);

// Find the high/low and thier month(s) for the last 3-4 years
for ( let i = 0 ; i < (theEnd+36) ; i++ ) {
	if (gldSPratio[i].ratio === high) {
		highDate.push(gldSPratio[i].date);
	}
	if (gldSPratio[i].ratio > high) {
		highDate = [];
		highDate.push(gldSPratio[i].date);
		high = gldSPratio[i].ratio;
	}
	if (gldSPratio[i].ratio === low) {
		lowDate.push(gldSPratio[i].date);
	}
	if (gldSPratio[i].ratio < low) {
		lowDate = [];
		lowDate.push(gldSPratio[i].date);
		low = gldSPratio[i].ratio;
	}
}


displayGLD = {
	month: whatMonth(gldSPratio[0].date),
	ratio:  (gldSPratio[0].ratio).toFixed(2),
	half: halfYear.toFixed(2),
	startYear: backYear,
	highs: high,
	highsDates: separateYM(highDate),
	lows: low,
	lowsDates: separateYM(lowDate)
}


module.exports = displayGLD;