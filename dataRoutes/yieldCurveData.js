
let treasury10vs3 = require("../dataNumbers/treasury10vs3.js");
let spPrice = require("../dataNumbers/spPrice.js");
let gdp = require("../dataNumbers/gdp.js");


for ( let i = (treasury10vs3.length - 3) ; i > -1 ; i-- ) {

	let first = treasury10vs3[i].spread;
	let second = treasury10vs3[i + 1].spread;
	let third = treasury10vs3[i + 2].spread;

	let spreadAverage = (first + second + third) / 3;

	if (spreadAverage < 0) {
		if (treasury10vs3[i].month === 3 || treasury10vs3[i].month === 6 || treasury10vs3[i].month === 9 || treasury10vs3[i].month === 12) {
//			console.log(treasury10vs3[i].quarter + " quarter of " + treasury10vs3[i].year);
//			console.log(treasury10vs3[i].date);
		}
	}
}

// 3rd quarter of 2000 (200009); S&P500 Price=1436.51; i=229; GDPCompile=81.363; i=76
// 3rd quarter of 2006 (200609); S&P500 Price=1335.85; i=157; GDPCompile=94.625; i=52
// 3rd quarter of 2019 (201909); S&P500 Price=2976.74; i=1; GDPCompile=118.000; i=0

/*
for ( let i = 0 ; i < spPrice.length ; i++ ) {
	if (spPrice[i].date === 201906) {
		console.log(i);
		console.log(spPrice[i].price);
	}
}
*/
/*
for ( let i = 0 ; i < gdp.length ; i++ ) {
	if (gdp[i].date === 201906) {
		console.log(i);
		console.log(gdp[i].gdpCompile);
	}
}
*/

let inversions = [
	{
		timePeriod: "3 Years Prior",
		sp00: (((spPrice[253].price - spPrice[265].price) / spPrice[265].price ) * 100).toFixed(2) + "|",
		gdp00: (((gdp[84].gdpCompile / gdp[88].gdpCompile) - 1) * 100).toFixed(1),
		sp06: (((spPrice[181].price - spPrice[193].price) / spPrice[193].price ) * 100).toFixed(2) + "|",
		gdp06: (((gdp[60].gdpCompile / gdp[64].gdpCompile) - 1) * 100).toFixed(1),
		sp19: (((spPrice[25].price - spPrice[37].price) / spPrice[37].price ) * 100).toFixed(2) + "|",
		gdp19: (((gdp[8].gdpCompile / gdp[12].gdpCompile) - 1) * 100).toFixed(1)
	},{
		timePeriod: "2 Years Prior",
		sp00: (((spPrice[241].price - spPrice[253].price) / spPrice[253].price ) * 100).toFixed(2) + "|",
		gdp00: (((gdp[80].gdpCompile / gdp[84].gdpCompile) - 1) * 100).toFixed(1),
		sp06: (((spPrice[169].price - spPrice[181].price) / spPrice[181].price ) * 100).toFixed(2) + "|",
		gdp06: (((gdp[56].gdpCompile / gdp[60].gdpCompile) - 1) * 100).toFixed(1),
		sp19: (((spPrice[13].price - spPrice[25].price) / spPrice[25].price ) * 100).toFixed(2) + "|",
		gdp19: (((gdp[4].gdpCompile / gdp[8].gdpCompile) - 1) * 100).toFixed(1)
	},{
		timePeriod: "1 Year Prior",
		sp00: (((spPrice[229].price - spPrice[241].price) / spPrice[241].price ) * 100).toFixed(2) + "|",
		gdp00: (((gdp[76].gdpCompile / gdp[80].gdpCompile) - 1) * 100).toFixed(1),
		sp06: (((spPrice[157].price - spPrice[169].price) / spPrice[169].price ) * 100).toFixed(2) + "|",
		gdp06: (((gdp[52].gdpCompile / gdp[56].gdpCompile) - 1) * 100).toFixed(1),
		sp19: (((spPrice[1].price - spPrice[13].price) / spPrice[13].price ) * 100).toFixed(2) + "|",
		gdp19: (((gdp[0].gdpCompile / gdp[4].gdpCompile) - 1) * 100).toFixed(1)
	},{
		timePeriod: "1 Year After",
		sp00: sp00oneAfter =  (((spPrice[217].price - spPrice[229].price) / spPrice[229].price ) * 100).toFixed(2) + "|",
		gdp00: (((gdp[72].gdpCompile / gdp[76].gdpCompile) - 1) * 100).toFixed(1),
		sp06: sp06oneAfter =  (((spPrice[145].price - spPrice[157].price) / spPrice[157].price ) * 100).toFixed(2) + "|",
		gdp06: (((gdp[48].gdpCompile / gdp[52].gdpCompile) - 1) * 100).toFixed(1),
		sp19: "-|",
		gdp19: "-"
	},{
		timePeriod: "2 Years After",
		sp00: (((spPrice[205].price - spPrice[217].price) / spPrice[217].price ) * 100).toFixed(2) + "|",
		gdp00: (((gdp[68].gdpCompile / gdp[72].gdpCompile) - 1) * 100).toFixed(1),
		sp06: (((spPrice[133].price - spPrice[145].price) / spPrice[145].price ) * 100).toFixed(2) + "|",
		gdp06: (((gdp[44].gdpCompile / gdp[48].gdpCompile) - 1) * 100).toFixed(1),
		sp19: "-|",
		gdp19: "-"
	},{
		timePeriod: "3 Years After",
		sp00: (((spPrice[193].price - spPrice[205].price) / spPrice[205].price ) * 100).toFixed(2) + "|",
		gdp00: (((gdp[64].gdpCompile / gdp[68].gdpCompile) - 1) * 100).toFixed(1),
		sp06: (((spPrice[121].price - spPrice[133].price) / spPrice[133].price ) * 100).toFixed(2) + "|",
		gdp06: (((gdp[40].gdpCompile / gdp[44].gdpCompile) - 1) * 100).toFixed(1),
		sp19: "-|",
		gdp19: "-"
	},{
		timePeriod: "Recession",
		sp00: "6 months",
		sp06: "15 months",
		sp19: "-"
	}
];

//console.log(inversions);

module.exports = inversions;