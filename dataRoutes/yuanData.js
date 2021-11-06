
let usdTOcny = require("../dataNumbers/dollarToYuan.js");
let dollarIndex = require("../dataNumbers/dollarIndex.js");

const toMonth = (allDate) => {
	let month = allDate.toString().slice(-2);
	month = Number(month);
	return monthsOfYear[month-1];	
}

const toMonthYear = (fullDate) => {
	stringMonth = toMonth(fullDate).toString();
	return stringMonth + ", " + fullDate.toString().slice(0, 4);	
}

const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let last = "";
let lessDate = 0;
let moreDate = 0;

let yuan = {
	thisMonth: toMonth(usdTOcny[0].date),
	current: (usdTOcny[0].rate).toFixed(2),
	dollarHigh: 0,
	dollarHighDate: "",
	yuanAtHigh: "",
	yuanHigh: "",
	dollarLow: 100,
	dollarLowDate: "",	
	yuanAtLow: "",
	yuanLow: "",	
	direction: ""
	}


for (let i = 0 ; i < 99 ; i++) {
	if (dollarIndex[i].price < yuan.dollarLow) {
		yuan.dollarLow = dollarIndex[i].price;
		lessDate = dollarIndex[i].date;
	} else if (dollarIndex[i].price > yuan.dollarHigh) {
		yuan.dollarHigh = dollarIndex[i].price;
		moreDate = dollarIndex[i].date;
	}
	if (dollarIndex[i].date === 201701) {
		i = 100;
	}
}

	yuan.dollarHighDate = toMonthYear(moreDate);
	yuan.dollarLowDate = toMonthYear(lessDate);

//	console.log(yuan.dollarLow + " is the low on " + lessDate + ", and " + yuan.dollarHigh + " is the high on " + moreDate);

for (let i = 0 ; i < 99 ; i++) {
	if (usdTOcny[i].date === lessDate) {
		yuan.yuanAtLow = (usdTOcny[i].rate).toFixed(2);
		i = 100;
	}
}

for (let i = 0 ; i < 99 ; i++) {
	if (usdTOcny[i].date === moreDate) {
		yuan.yuanAtHigh = (usdTOcny[i].rate).toFixed(2);
		i = 100;
	}
}

//	console.log(yuan.yuanAtLow + " is the low, and " + yuan.yuanAtHigh + " is the high");

let lowest = 10;
let highest = 0;

for ( let i = 0 ; i < usdTOcny.length ; i++ ) {
	if (usdTOcny[i].rate < lowest) {
		lowest = usdTOcny[i].rate;
	}
	if (usdTOcny[i].rate > highest) {
		highest = usdTOcny[i].rate;
	}
}

yuan.yuanLow = lowest.toFixed(2);
yuan.yuanHigh = highest.toFixed(2);

//	console.log(yuan.yuanLow + " is the lowest rate and " + yuan.yuanHigh + " is the highest.");

if (usdTOcny[0].rate > usdTOcny[1].rate) {
	if (usdTOcny[1].rate > usdTOcny[2].rate) {
		yuan.direction = "toward a weaker";
	} else {
		yuan.direction = "a mixed";
	}
} else {
	if (usdTOcny[1].rate < usdTOcny[2].rate) {
		yuan.direction = "toward a stronger";
	} else {
		yuan.direction = "a mixed";
	}			
}

//	console.log(yuan);


module.exports = yuan;