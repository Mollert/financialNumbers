
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
for (let i = 4 ; i < spEarnings.length ; i++) {
	earningsDisplay.allYearTTM = earningsDisplay.allYearTTM + spEarnings[i].pe;
}
earningsDisplay.allYearTTM = ((earningsDisplay.allYearTTM - extremePE) / (spEarnings.length - 4 - 8)).toFixed(2);


module.exports = earningsDisplay;