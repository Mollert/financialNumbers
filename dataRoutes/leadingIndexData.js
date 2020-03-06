
let leadingIndex = require("../dataNumbers/leadingIndex.js");
let allDates = require("../dataRoutes/createDates.js");
let splitDate = allDates.divideDate;


let economicIndex = {
	lastMonth: "was unchanged",
	month: "",
	not: "",
	up: 0,
	average: 0,	
	averageDirection: "",
	totalTime: parseInt(leadingIndex.length / 12)
	
}

// Latest results increase or decrease
if (leadingIndex[0].percentage > 0) {
	economicIndex.lastMonth = "increased " + (leadingIndex[0].percentage * 100) + "%";
} else if (leadingIndex[0].percentage < 0) {
	let changeSign = leadingIndex[0].percentage * -100;
	economicIndex.lastMonth = "decreased " + changeSign + "%";
}

// Separate out the month from the year, month, month number array
let currentMonth = splitDate(leadingIndex[0].date);
economicIndex.month = currentMonth[1];

// Results of the last four months
for ( i = 0 ; i < 4 ; i++ ) {
	if (leadingIndex[i].percentage >= 0) {
		economicIndex.up++;
	}
}

switch (economicIndex.up) {
	case 0:
		economicIndex.not= "not";
		economicIndex.up = "at all in";
		break;
	case 1:
		economicIndex.up = "only once in";
		break;
	case 2:
		economicIndex.up = "two of";
		break;
	case 3:
		economicIndex.up = "three of";
		break;
	case 4:
		economicIndex.up = "all four of";
		break;
	default:
		break;				
}

// Average percentage over last 213 months
let runningTotal = 0;
for ( i = 0 ; i < leadingIndex.length ; i++ ) {
	runningTotal = runningTotal + leadingIndex[i].percentage;
}

economicIndex.average = (runningTotal / leadingIndex.length) * 100;
economicIndex.average = economicIndex.average.toFixed(1);

if (economicIndex.average > 0) {
	economicIndex.averageDirection = "increase";
} else if(economicIndex.average < 0) {
	economicIndex.averageDirection = "decrease";
} else {
	economicIndex.averageDirection = "return";	
}


module.exports = economicIndex;