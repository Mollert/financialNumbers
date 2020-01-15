
let cpi = require("../dataNumbers/cpi.js");

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
for (let j = 0 ; j < 6 ; j++) {

	let lastMonthCpi = 0;
	let previousMonthCpi = 0;
	let theMonthCpiDif = 0;
	let theMonthCpi = 0;

	for (let i = j ; i < (j + 12) ; i++) {
		lastMonthCpi = lastMonthCpi + cpi[i].cpi;
	}

	for (let i = (j + 12) ; i < (j + 24) ; i++) {
		previousMonthCpi = previousMonthCpi + cpi[i].cpi;
	}

	theMonthCpiDif = lastMonthCpi - previousMonthCpi;
	theMonthCpi = (theMonthCpiDif / previousMonthCpi) * 100;
	theMonthCpi = theMonthCpi.toFixed(2);

	console.log(cpi[j].date1 + " is the date and the CPI is " + theMonthCpi);
}
*/

/*
// Generate yearly CPI percentage
let totalCpiNew = 0;
let totalCpiOld = 0;
let theCpiDif = 0;
let theCpi = 0;

for (let i = 0 ; i < 48 ; i++) {

	totalCpiNew = 0;
	totalCpiOld = 0;
	theCpiDif = 0;
	theCpi = 0;

// 9 + 12 : 21 + 12
	for (let j = i ; j < ( i + 12 ) ; j++) {		
		totalCpiNew = totalCpiNew + cpi[j].cpi;
	}
// 21 + 12 : 33 + 12
	for (let k = ( i + 12 ) ; k < ( i + 24 ) ; k++) {
		totalCpiOld = totalCpiOld + cpi[k].cpi;
	}

	theCpiDif = totalCpiNew - totalCpiOld;
	theCpi = (theCpiDif / totalCpiOld) * 100;
	theCpi = theCpi.toFixed(2);

	console.log(theCpi + " is the year " + cpi[i].date2 + "'s CPI.");

	i = i + 11;
}
*/

let perYear = {
	thisOne: cpi[0].last12Months,
	oneAgo: 0,
	twoAgo: 0,
	threeAgo: 0
}

let usingDate = cpi[0].date2 - 1;

for (let i = 0 ; i < 15 ; i++) {
	if (cpi[i].date2 === usingDate) {
		perYear.oneAgo = cpi[i].year;
		perYear.twoAgo = cpi[i+12].year;
		perYear.threeAgo = cpi[i+24].year;
		i = 15;
	}
}


module.exports = perYear;