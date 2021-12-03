
let treasury10vs2 = require("../dataNumbers/treasury10vs2.js");
let recessions = require("../dataNumbers/recessions.js");

const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let justForMonth = new Date();

let tenVsTwo = {
	theMonth: monthsOfYear[justForMonth.getMonth()],
	recentSpread: (treasury10vs2[0].spread).toFixed(2),
	twoSpread: (treasury10vs2[2].spread).toFixed(2),
	fourSpread: (treasury10vs2[4].spread).toFixed(2)
}


/*
let invertData = [];

for (let i = 0 ; i < recessions.length ; i++) {

	let startDate = 0;

	for (let j = 0 ; j < treasury10vs2.length ; j++) {
		if (treasury10vs2[j].date === recessions[i].start) {
			startDate = j;
		}
	}

	let count = -1;
	for (let k = startDate ; k < treasury10vs2.length ; k++) {
		count++;
		if (treasury10vs2[k].spread <= 0) {

			let whichInstance = {
				recession: recessions[i].start,
				monthsPrior: count
			}

			invertData.push(whichInstance);

			k = 600;
		}
	}
}
//console.log(invertData);
*/


module.exports = tenVsTwo;