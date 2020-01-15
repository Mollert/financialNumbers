
//let gdp = require("../dataNumbers/gdp.js");

/*
// Calculation of quarterly GDP

//for (let i = 0 ; i < (gdp.length - 1) ; i++) {
for (let i = 0 ; i < 4 ; i++) {

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

//let settingUp = "Just for set-up";
//module.exports = settingUp;