
let treasury10vs3 = require("../dataNumbers/treasury10vs3.js");
let spPrice = require("../dataNumbers/spPrice.js");
let gdp = require("../dataNumbers/gdp.js");

// Finding all inversions
for ( let i = (treasury10vs3.length - 3) ; i > -1 ; i-- ) {

	let first = treasury10vs3[i].spread;
	let second = treasury10vs3[i + 1].spread;
	let third = treasury10vs3[i + 2].spread;

	let spreadAverage = (first + second + third) / 3;
// This will find the inversions and will list the quarter, year and year/month for recall
	if (spreadAverage < 0) {
		if (treasury10vs3[i].month === 3 || treasury10vs3[i].month === 6 || treasury10vs3[i].month === 9 || treasury10vs3[i].month === 12) {
//			console.log(treasury10vs3[i].quarter + " quarter of " + treasury10vs3[i].year);
//			console.log(treasury10vs3[i].date);
		}
	}
}
// Here are the quarters and dates of inversions.
// 3rd quarter of 2000 (200009)
// 3rd quarter of 2006 (200609)
// 3rd quarter of 2019 (201909)
// Instantiating these values as groups to save room.
let sp00v = 0, sp00P12 = 0, sp00P24 = 0, sp00P36 = 0, sp00M12 = 0, sp00M24 = 0, sp00M36 = 0;
let sp06v = 0, sp06P12 = 0, sp06P24 = 0, sp06P36 = 0, sp06M12 = 0, sp06M24 = 0, sp06M36 = 0;
let sp19v = 0, sp19P12 = 0, sp19P24 = 0, sp19P36 = 0, sp19M12 = 0, sp19M24 = 0;

let gdp00v = 0, gdp00P4 = 0, gdp00P8 = 0, gdp00P12 = 0, gdp00M4 = 0, gdp00M8 = 0, gdp00M12 = 0;
let gdp06v = 0, gdp06P4 = 0, gdp06P8 = 0, gdp06P12 = 0, gdp06M4 = 0, gdp06M8 = 0, gdp06M12 = 0;
let gdp19v = 0, gdp19P4 = 0, gdp19P8 = 0, gdp19P12 = 0, gdp19M4 = 0, gdp19M8 = 0;
// Finding each inversion with date and assigning array location and plus/minus to each.
for ( let i = 0 ; i < spPrice.length ; i++ ) {
	if (spPrice[i].date === 201909) {
		sp19v = i;
		sp19P12 = i + 12;
		sp19P24 = i + 24;
		sp19P36 = i + 36;
		sp19M12 = i - 12;
		sp19M24 = i - 24;		
	}
	if (spPrice[i].date === 200609) {
		sp06v = i;
		sp06P12 = i + 12;
		sp06P24 = i + 24;
		sp06P36 = i + 36;
		sp06M12 = i - 12;
		sp06M24 = i - 24;
		sp06M36 = i - 36;
	}
	if (spPrice[i].date === 200009) {
		sp00v = i;
		sp00P12 = i + 12;
		sp00P24 = i + 24;
		sp00P36 = i + 36;
		sp00M12 = i - 12;
		sp00M24 = i - 24;
		sp00M36 = i - 36;
	}
}
for ( let i = 0 ; i < gdp.length ; i++ ) {
	if (gdp[i].date === 201909) {
		gdp19v = i;
		gdp19P4 = i + 4;
		gdp19P8 = i + 8;
		gdp19P12 = i + 12;
		gdp19M4 = i - 4;
		gdp19M8 = i - 8;
	}
	if (gdp[i].date === 200609) {
		gdp06v = i;
		gdp06P4 = i + 4;
		gdp06P8 = i + 8;
		gdp06P12 = i + 12;
		gdp06M4 = i - 4;
		gdp06M8 = i - 8;
		gdp06M12 = i - 12;
	}
	if (gdp[i].date === 200009) {
		gdp00v = i;		
		gdp00P4 = i + 4;
		gdp00P8 = i + 8;
		gdp00P12 = i + 12;
		gdp00M4 = i - 4;
		gdp00M8 = i - 8;
		gdp00M12 = i - 12;
	}
}
// Loading up the array to show on main page.
let inversions = [
	{
		timePeriod: "3 Years Prior",
		sp00: (((spPrice[sp00P24].price - spPrice[sp00P36].price) / spPrice[sp00P36].price ) * 100).toFixed(2) + "|",
		gdp00: (((gdp[gdp00P8].gdpCompile / gdp[gdp00P12].gdpCompile) - 1) * 100).toFixed(1),
		sp06: (((spPrice[sp06P24].price - spPrice[sp06P36].price) / spPrice[sp06P36].price ) * 100).toFixed(2) + "|",
		gdp06: (((gdp[gdp06P8].gdpCompile / gdp[gdp06P12].gdpCompile) - 1) * 100).toFixed(1),
		sp19: (((spPrice[sp19P24].price - spPrice[sp19P36].price) / spPrice[sp19P36].price ) * 100).toFixed(2) + "|",
		gdp19: (((gdp[gdp19P8].gdpCompile / gdp[gdp19P12].gdpCompile) - 1) * 100).toFixed(1)
	},{
		timePeriod: "2 Years Prior",
		sp00: (((spPrice[sp00P12].price - spPrice[sp00P24].price) / spPrice[sp00P24].price ) * 100).toFixed(2) + "|",
		gdp00: (((gdp[gdp00P4].gdpCompile / gdp[gdp00P8].gdpCompile) - 1) * 100).toFixed(1),
		sp06: (((spPrice[sp06P12].price - spPrice[sp06P24].price) / spPrice[sp06P24].price ) * 100).toFixed(2) + "|",
		gdp06: (((gdp[gdp06P4].gdpCompile / gdp[gdp06P8].gdpCompile) - 1) * 100).toFixed(1),
		sp19: (((spPrice[sp19P12].price - spPrice[sp19P24].price) / spPrice[sp19P24].price ) * 100).toFixed(2) + "|",
		gdp19: (((gdp[gdp19P4].gdpCompile / gdp[gdp19P8].gdpCompile) - 1) * 100).toFixed(1)
	},{
		timePeriod: "1 Year Prior",
		sp00: (((spPrice[sp00v].price - spPrice[sp00P12].price) / spPrice[sp00P12].price ) * 100).toFixed(2) + "|",
		gdp00: (((gdp[gdp00v].gdpCompile / gdp[gdp00P4].gdpCompile) - 1) * 100).toFixed(1),
		sp06: (((spPrice[sp06v].price - spPrice[sp06P12].price) / spPrice[sp06P12].price ) * 100).toFixed(2) + "|",
		gdp06: (((gdp[gdp06v].gdpCompile / gdp[gdp06P4].gdpCompile) - 1) * 100).toFixed(1),
		sp19: (((spPrice[sp19v].price - spPrice[sp19P12].price) / spPrice[sp19P12].price ) * 100).toFixed(2) + "|",
		gdp19: (((gdp[gdp19v].gdpCompile / gdp[gdp19P4].gdpCompile) - 1) * 100).toFixed(1)
	},{
		timePeriod: "1 Year After",
		sp00: (((spPrice[sp00M12].price - spPrice[sp00v].price) / spPrice[sp00v].price ) * 100).toFixed(2) + "|",
		gdp00: (((gdp[gdp00M4].gdpCompile / gdp[gdp00v].gdpCompile) - 1) * 100).toFixed(1),
		sp06: (((spPrice[sp06M12].price - spPrice[sp06v].price) / spPrice[sp06v].price ) * 100).toFixed(2) + "|",
		gdp06: (((gdp[gdp06M4].gdpCompile / gdp[gdp06v].gdpCompile) - 1) * 100).toFixed(1),
		sp19: (((spPrice[sp19M12].price - spPrice[sp19v].price) / spPrice[sp19v].price ) * 100).toFixed(2) + "|",
		gdp19: (((gdp[gdp19M4].gdpCompile / gdp[gdp19v].gdpCompile) - 1) * 100).toFixed(1)
	},{
		timePeriod: "2 Years After",
		sp00: (((spPrice[sp00M24].price - spPrice[sp00M12].price) / spPrice[sp00M12].price ) * 100).toFixed(2) + "|",
		gdp00: (((gdp[gdp00M8].gdpCompile / gdp[gdp00M4].gdpCompile) - 1) * 100).toFixed(1),
		sp06: (((spPrice[sp06M24].price - spPrice[sp06M12].price) / spPrice[sp06M12].price ) * 100).toFixed(2) + "|",
		gdp06: (((gdp[gdp06M8].gdpCompile / gdp[gdp06M4].gdpCompile) - 1) * 100).toFixed(1),
		sp19: (((spPrice[sp19M24].price - spPrice[sp19M12].price) / spPrice[sp19M12].price ) * 100).toFixed(2) + "|",
		gdp19: (((gdp[gdp19M8].gdpCompile / gdp[gdp19M4].gdpCompile) - 1) * 100).toFixed(1)
	},{
		timePeriod: "3 Years After",
		sp00: (((spPrice[sp00M36].price - spPrice[sp00M24].price) / spPrice[sp00M24].price ) * 100).toFixed(2) + "|",
		gdp00: (((gdp[gdp00M12].gdpCompile / gdp[gdp00M8].gdpCompile) - 1) * 100).toFixed(1),
		sp06: (((spPrice[sp06M36].price - spPrice[sp06M24].price) / spPrice[sp06M24].price ) * 100).toFixed(2) + "|",
		gdp06: (((gdp[gdp06M12].gdpCompile / gdp[gdp06M8].gdpCompile) - 1) * 100).toFixed(1),
		sp19: "-|",
		gdp19: "-"
	},{
		timePeriod: "Recession",
		sp00: "6 months",
		sp06: "15 months",
		sp19: "5 months"
	}
];

//console.log(inversions);


module.exports = inversions;