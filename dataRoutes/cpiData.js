
//let cpi = require("../dataNumbers/cpi.js");

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

	for (let i = (j + 12) ; i < (j+ 24) ; i++) {
		previousMonthCpi = previousMonthCpi + cpi[i].cpi;
	}

	theMonthCpiDif = lastMonthCpi - previousMonthCpi;
	theMonthCpi = (theMonthCpiDif / previousMonthCpi) * 100;
	theMonthCpi = theMonthCpi.toFixed(2);

	console.log(cpi[j].date1 + " is the date and the CPI is " + theMonthCpi);
}
console.log(cpi[249].date1);
*/

/*
// Generate yearly CPI percentage

console.log(cpi[225].date1);
console.log(cpi[236].date1);
console.log(cpi[248].date1);		

let totalCpiNew = 0;
let totalCpiOld = 0;
let theCpiDif = 0;
let theCpi = 0;

// 9 + 12 : 21 + 12
for (let i = 225 ; i < 237 ; i++) {
	totalCpiNew = totalCpiNew + cpi[i].cpi;
}
// 21 + 12 : 33 + 12
for (let i = 237 ; i < 249 ; i++) {
	totalCpiOld = totalCpiOld + cpi[i].cpi;
}

theCpiDif = totalCpiNew - totalCpiOld;
theCpi = (theCpiDif / totalCpiOld) * 100;
theCpi = theCpi.toFixed(2);

console.log(theCpi);
*/

//module.exports = cpiData;