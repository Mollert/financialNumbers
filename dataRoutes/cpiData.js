
let cpi = require("../dataNumbers/cpi.js");

let modArrayLength = (cpi.length) - 12;
//console.log(cpi.length);// = 458


/*
// Generate last month percentage
for (let i = 0 ; i < 6 ; i++) {

	let theLastMonthsCpi = ((cpi[i].seasonalAdj.cpi - cpi[i+1].seasonalAdj.cpi) / cpi[i].seasonalAdj.cpi) * 100;
	theLastMonthsCpi = theLastMonthsCpi.toFixed(3);

	console.log("the month of " + cpi[i].date1 + " had a CPI of " + theLastMonthsCpi);
}
*/

/*
// Generate last 12 months percentage
//for (let j = 0 ; j < modArrayLength ; j++) {
// Use above for all 12 month periods
for (let j = 0 ; j < 6 ; j++) {

	let twelveMonthPercentage = ((cpi[j].seasonalAdj.cpi - cpi[j+12].seasonalAdj.cpi) / cpi[j+12].seasonalAdj.cpi) *100;
	twelveMonthPercentage = twelveMonthPercentage.toFixed(2);

	console.log("For the last twelve month period ending with " + cpi[j].date1 + ", the CPI was " + twelveMonthPercentage);
}
*/

/*
// Generate yearly CPI percentage
for (let k = 0 ; k < modArrayLength ; k++) {

	let gotYear = (cpi[k].date1 - 12) / 100;

	if (gotYear === cpi[k].date2) {
		let yearPercentage = ((cpi[k].seasonalAdj.cpi - cpi[k+12].seasonalAdj.cpi) / cpi[k+12].seasonalAdj.cpi) *100;
		yearPercentage = yearPercentage.toFixed(2);

		console.log(yearPercentage + " is the year " + cpi[k].date2 + "'s CPI.");
	}
}
*/

let perYear = {
	thisOne: cpi[0].seasonalAdj.last12Months,
	oneYear: 0,
	oneAgo: 0,
	twoYear: 0,
	twoAgo: 0,
	threeYear: 0,
	threeAgo: 0
}
//  This checks if cpi[0] is a december number
//  being it is checking for the previous year
let usingDate = (cpi[0].date1 % 100);

if (usingDate === 12) {
	usingDate = cpi[0].date2;
} else {
	usingDate = cpi[0].date2 - 1;
}

for (let i = 0 ; i < 15 ; i++) {
	if (cpi[i].date2 === usingDate) {
		perYear.oneYear = cpi[i].date2;
		perYear.oneAgo = cpi[i].seasonalAdj.year;
		perYear.twoYear = cpi[i+12].date2;
		perYear.twoAgo = cpi[i+12].seasonalAdj.year;
		perYear.threeYear = cpi[i+24].date2;
		perYear.threeAgo = cpi[i+24].seasonalAdj.year;		
		i = 15;
	}
}


module.exports = perYear;