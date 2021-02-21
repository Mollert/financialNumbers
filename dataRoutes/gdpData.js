
let gdp = require("../dataNumbers/gdp.js");

/*
// Calculation of quarterly GDP

//for (let i = 0 ; i < (gdp.length - 1) ; i++) {
for (let i = 0 ; i < 8 ; i++) {

	let ratio = 0;

	ratio = gdp[i].gdpCompile / gdp[i + 1].gdpCompile;

	ratio = Math.pow(ratio, 4);

	ratio = (ratio - 1) * 100;

	ratio = ratio.toFixed(1);

	console.log("The GDP for the " + gdp[i].quarter + " of " + gdp[i].year + " was " + ratio + ".");
}
*/

/*
// Calculation GDP for one year

let ratio = 0;
// More recent GPD figure divided by earlier GDP figure
ratio = gdp[6].gdpCompile / gdp[10].gdpCompile;
// m is equal to 1 for annual data, n is 1 being it is one year and adjacent.  m/n = 1.
// m is equal to 4 being 4th quarter, n is 4 also being number of observations.  m/n = 1.
ratio = Math.pow(ratio, 1.0);

ratio = (ratio - 1) * 100;

ratio = ratio.toFixed(1);

console.log("The yearly GDP starting the " + gdp[10].quarter + " quarter of " + gdp[10].year + " was " + ratio + ".");
*/

/*
// Calculation GDP for two years

//let ratio = 0;
// More recent GPD figure divided by earlier GDP figure
ratio = gdp[2].gdpCompile / gdp[10].gdpCompile;
// m is equal to 1 for annual data, n is 2 being over a 2 year period.  m/n = 0.5.
// m is equal to 4 being quarters, n is 8 being number of observations over 2 years.  m/n = 4/8 = 0.5.
ratio = Math.pow(ratio, 0.5);

ratio = (ratio - 1) * 100;

ratio = ratio.toFixed(1);

console.log("The yearly GDP starting the " + gdp[10].quarter + " quarter of " + gdp[10].year + " was " + ratio + ".");
*/

let gdpResults = {
	presentQuarter: gdp[0].quarter,
	presentYear: gdp[0].year,
	presentResults: (gdp[0].gdp).toFixed(1),
	previousYear: 0,
	previousGdp: 0,
	recentHigh: 0,
	recentYear: 0,
	fiveYear: 0,
	tenYear: 0,
	fifteenYear: 0
}

let allGdps = [];
let total = 0;

for (let i = 0 ; i < 8 ; i++) {
	if (gdp[i].quarter === "4th") {
		gdpResults.previousYear = gdp[i].year;

		let lastYear = 0;
		lastYear = gdp[i].gdpCompile / gdp[i+4].gdpCompile;
		lastYear = (lastYear - 1) * 100;
		gdpResults.previousGdp = lastYear.toFixed(1);

		i = 8;
	}
}

for (let i = 0 ; i < 6 ; i++) {
	if (gdp[i].quarter === "4th") {
		let aYear = 0;		
		for (let j = 0 ; j < 60 ; j++) {

			aYear = gdp[j].gdpCompile / gdp[j+4].gdpCompile;
			aYear = (aYear - 1) * 100;

			allGdps.push(aYear);

			if (aYear > gdpResults.recentHigh) {
				gdpResults.recentHigh = aYear.toFixed(1);
				gdpResults.recentYear = gdp[j].year;
			}

			j += 3;
		}

		i = 6;
	}
}

for (let i = 0 ; i < 15 ; i++) {
	total += allGdps[i];

	if (i === 4) {
		gdpResults.fiveYear = (total / 5).toFixed(1);
	}

	if (i === 9) {
		gdpResults.tenYear = (total / 10).toFixed(1);
	}

	if (i === 14) {
		gdpResults.fifteenYear = (total / 15).toFixed(1);
	}
}


module.exports = gdpResults;