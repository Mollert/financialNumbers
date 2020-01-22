
let spEarnings = require("../dataNumbers/spEarnings.js");

let earningsDisplay = {
	recentDate: "",
	recentEarnings: 0,
	recentPE: 0,
	recentTTM: 0,
	oneYearTTM: 0,
	twoYearTTM: 0,
	fiveYearTTM: 0,
	allYearTTM: 0
}


earningsDisplay.recentDate = spEarnings[0].date2;
earningsDisplay.recentEarnings = (spEarnings[0].earnings).toFixed(2);
earningsDisplay.recentPE = (spEarnings[0].pe).toFixed(2);


for (let i = 0 ; i < 4 ; i++) {
	earningsDisplay.recentTTM = earningsDisplay.recentTTM + spEarnings[i].pe;
}
earningsDisplay.recentTTM = (earningsDisplay.recentTTM / 4).toFixed(2);


for (let i = 4 ; i < 8 ; i++) {
	earningsDisplay.oneYearTTM = earningsDisplay.oneYearTTM + spEarnings[i].pe;
}
earningsDisplay.oneYearTTM = (earningsDisplay.oneYearTTM / 4).toFixed(2);


for (let i = 8 ; i < 12 ; i++) {
	earningsDisplay.twoYearTTM = earningsDisplay.twoYearTTM + spEarnings[i].pe;
}
earningsDisplay.twoYearTTM = (earningsDisplay.twoYearTTM / 4).toFixed(2);


for (let i = 20 ; i < 24 ; i++) {
	earningsDisplay.fiveYearTTM = earningsDisplay.fiveYearTTM + spEarnings[i].pe;
}
earningsDisplay.fiveYearTTM = (earningsDisplay.fiveYearTTM / 4).toFixed(2);


let extremePE = 84.30 + 122.41 + 116.31 + 60.70 + 37.02 + 46.45 + 46.50 + 36.77;
// Removed eight quarters that where centered around an recession
let stopSign = 0;
let since2000 = 0;
for (let i = 0 ; i < spEarnings.length ; i++) {
	stopSign = spEarnings[i].date1 - 200000;
	if (stopSign > 0) {
		earningsDisplay.allYearTTM = earningsDisplay.allYearTTM + spEarnings[i].pe;
		since2000++;
	}
}
earningsDisplay.allYearTTM = ((earningsDisplay.allYearTTM - extremePE) / (since2000 - 8)).toFixed(2);


module.exports = earningsDisplay;