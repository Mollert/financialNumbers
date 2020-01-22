
let cpi = require("../dataNumbers/cpi.js");

let modArrayLength = (cpi.length) - 12;
//console.log(cpi.length); = 421


/*
// Generate last month percentage
for (let i = 0 ; i < 6 ; i++) {

	let theLastMonthsCpi = ((cpi[i].cpi - cpi[i+1].cpi) / cpi[i].cpi) * 100;
	theLastMonthsCpi = theLastMonthsCpi.toFixed(3);

	console.log(cpi[i].date1 + " had a CPI of " + theLastMonthsCpi);
}
*/

/*
// Generate last 12 months percentage

for (let j = 0 ; j < modArrayLength ; j++) {

	let twelveMonthPercentage = ((cpi[j].cpi - cpi[j+12].cpi) / cpi[j+12].cpi) *100;
	twelveMonthPercentage = twelveMonthPercentage.toFixed(2);

	console.log(cpi[j].date1 + " is the date and the CPI is " + twelveMonthPercentage);
}
*/

/*
// Generate yearly CPI percentage

for (let k = 0 ; k < modArrayLength ; k++) {

	let gotYear = (cpi[k].date1 - 12) / 100;

	if (gotYear === cpi[k].date2) {
		let yearPercentage = ((cpi[k].cpi - cpi[k+12].cpi) / cpi[k+12].cpi) *100;
		yearPercentage = yearPercentage.toFixed(2);

		console.log(yearPercentage + " is the year " + cpi[k].date2 + "'s CPI.");
	}
}
*/

let perYear = {
	thisOne: cpi[0].last12Months,
	oneYear: 0,
	oneAgo: 0,
	twoYear: 0,
	twoAgo: 0,
	threeYear: 0,
	threeAgo: 0
}

let usingDate = cpi[0].date2 - 1;

for (let i = 0 ; i < 15 ; i++) {
	if (cpi[i].date2 === usingDate) {
		perYear.oneYear = cpi[i].date2;
		perYear.oneAgo = cpi[i].year;
		perYear.twoYear = cpi[i+12].date2;
		perYear.twoAgo = cpi[i+12].year;
		perYear.threeYear = cpi[i+24].date2;
		perYear.threeAgo = cpi[i+24].year;		
		i = 15;
	}
}


module.exports = perYear;