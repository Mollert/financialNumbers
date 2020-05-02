
let gldSPratio = require("../dataNumbers/gldSPratio.js");

const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/*
for( let i = 0 ; i < 50 ; i++ ) {	
	console.log(gldSPratio[i].date + " the ratio was " + gldSPratio[i].ratio.toFixed(2));
}
*/

let theEnd = "";
let currentMonth = "";

theEnd = (gldSPratio[0].date).toString().slice(-2);
theEnd = Number(theEnd);
theMonth = monthsOfYear[theEnd-1];

displayGLD = {
	month: theMonth,
	ratio:  gldSPratio[0].ratio
}


module.exports = displayGLD;