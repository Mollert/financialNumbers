
let unemployment = require("../dataNumbers/unemployment.js");

let currentAverage = (unemployment[0].rate + unemployment[1].rate + unemployment[2].rate) / 3;
let monthlyLow = 10;
let rateGap = 0;
let allRates = 0;
let twelveMonthAverage = 0;

for (let i = 0 ; i < 12 ; i++) {
	let runingAverage = (unemployment[i].rate + unemployment[i + 1].rate + unemployment[i + 2].rate) / 3;
	if (runingAverage < monthlyLow) {
		monthlyLow = runingAverage;
	}
}
rateGap = (currentAverage - monthlyLow).toFixed(1);
if (rateGap < 0) {
	rateGap = (rateGap * -1).toFixed(1);
}

currentAverage = currentAverage.toFixed(2);
//console.log(rateGap);

for (let i = 0 ; i < 12 ; i++) {
	allRates = allRates + unemployment[i].rate;
}
twelveMonthAverage = allRates / 12;
twelveMonthAverage = twelveMonthAverage.toFixed(1);

/*
let highGapYears = [];

for (let i = 0 ; i < (unemployment.length - 14) ; i++) {
	let segmentAverage = (unemployment[i].rate + unemployment[i + 1].rate + unemployment[i + 2].rate) / 3;
	let segmentLow = 20;
	let runingAverage = 0;

	for (let j = 0 ; j < 12 ; j++ ) {
		let k = i + j;
		runingAverage = (unemployment[k].rate + unemployment[k + 1].rate + unemployment[k + 2].rate) / 3;
		if (runingAverage < segmentLow) {
			segmentLow = runingAverage;
		}
	}

//	console.log("The segmentAverage is: " + segmentAverage.toFixed(1) + " and the segmentLow is: " + segmentLow.toFixed(1) + " the begining unemployment rate is " + unemployment[i].rate + " and date of " + unemployment[i].date);

	segmentGap = (segmentAverage - segmentLow).toFixed(1);
	if (segmentGap < 0) {
		segmentGap = (segmentGap * -1).toFixed(1);
	}

	if (segmentGap >= 0.3) {
		highGapYears.push(unemployment[i].date);
	}
}
*/
//console.log(highGapYears);

// Years segment gap was greater than or equal to 0.3
// 200103 to 200211
// 200305 to 200310
// 200711 to 201005


module.exports = { currentAverage, twelveMonthAverage, rateGap };