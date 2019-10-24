
let treasury10vs3 = require("../dataNumbers/treasury10vs3.js");


let invertI = [];

for ( let i = (treasury10vs3.length - 3) ; i > -1 ; i-- ) {

	let first = treasury10vs3[i].spread;
	let second = treasury10vs3[i + 1].spread;
	let third = treasury10vs3[i + 2].spread;

	let spreadAverage = (first + second + third) / 3;

	if (spreadAverage < 0) {
		if (treasury10vs3[i].month === 3 || treasury10vs3[i].month === 6 || treasury10vs3[i].month === 9 || treasury10vs3[i].month === 12) {
			invertI.push(i);
//			console.log(treasury10vs3[i].quarter + " quarter of " + treasury10vs3[i].year);
		}
	}
}

//console.log(invertI);


let inversions = [
	{
		date: 200009,
		year: 2000,
		quarter: "3rd",
		gdpInversion: 0.5,
		gdpOnePrior: 7.5,
		gdpTwoAfter: -1.1,
		recession: "6 months"
	},{
		date: 200609,
		year: 2006,
		quarter: "3rd",
		gdpInversion: 0.6,
		gdpOnePrior: 0.9,
		gdpTwoAfter: 0.9,
		recession: "15 months"
	},{
		date: 201906,
		year: 2019,
		quarter: "2nd",
		gdpInversion: 2.0,
		gdpOnePrior: 3.1,
		gdpTwoAfter: "not yet",
		recession: "not yet"
	}
];


module.exports = inversions;