
let usdTOcny = require("../dataNumbers/dollarToYuan.js");

const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let yuan = {
	thisMonth: "",
	current: (usdTOcny[0].rate).toFixed(2),
	whatPercent: 0,
	direction: ""
	}
let last = "";
let less = 8;
let more = 0;
let workingRange = 0;


last = (usdTOcny[0].date).toString().slice(-2);
last = Number(last);
yuan.thisMonth = monthsOfYear[last-1];

usdTOcny.forEach((listing) => {
	if (listing.rate < less) {
		less = listing.rate;
	} else if (listing.rate > more) {
		more = listing.rate;
	}
});
//	console.log(less + " is the low, and " + more + " is the high");
	
workingRange = more - less;
yuan.whatPercent = (usdTOcny[0].rate - less) / workingRange;
yuan.whatPercent = (yuan.whatPercent).toFixed(2);

if (usdTOcny[0].rate > usdTOcny[1].rate) {
	if (usdTOcny[1].rate > usdTOcny[2].rate) {
		yuan.direction = "more Yuan's needed";
	} else {
		yuan.direction = "mixed";
	}
} else {
	if (usdTOcny[1].rate < usdTOcny[2].rate) {
		yuan.direction = "less Yuan's needed";
	} else {
		yuan.direction = "mixed";
	}			
}


module.exports = yuan;