
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

let theEnd = "";

theEnd = (gldSPratio[0].date).toString().slice(-2);
theEnd = Number(theEnd);
theMonth = monthsOfYear[theEnd-1];

displayGLD = {
	month: theMonth,
	ratio:  (gldSPratio[0].ratio).toFixed(2)
}


module.exports = displayGLD;