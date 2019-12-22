
let consumerConfidence = require("../dataNumbers/consumerConfidence.js");

let confidenceData = {
	lastMonth: "was unchanged",
	month: consumerConfidence[0].month,
	has: "has ",
	times: 1,
	changePercent: 0,
	lastYear: "change",
	multiple: "s"
}

let latestAverage = (consumerConfidence[0].index + consumerConfidence[1].index + consumerConfidence[2].index) / 3;
let yearOldAverage = (consumerConfidence[11].index + consumerConfidence[12].index + consumerConfidence[13].index) / 3;


if (yearOldAverage < latestAverage) {
	confidenceData.changePercent = (((latestAverage - yearOldAverage) / yearOldAverage) * 100).toFixed(1);
	confidenceData.lastYear = "increase";
} else if (yearOldAverage > latestAverage) {
	confidenceData.changePercent = (((yearOldAverage - latestAverage) / yearOldAverage) * 100).toFixed(1);
	confidenceData.lastYear = "decrease";
}

if (consumerConfidence[0].index > consumerConfidence[1].index) {
	confidenceData.lastMonth = "increased";
} else if (consumerConfidence[0].index < consumerConfidence[1].index) {
	confidenceData.lastMonth = "decreased";
}

for (let i = 1 ; i < 50 ; i++) {

	let continuedDirection = "was unchanged";
	if (consumerConfidence[i].index > consumerConfidence[i+1].index) {
		continuedDirection = "increased";
	} else if (consumerConfidence[i].index < consumerConfidence[i+1].index) {
		continuedDirection = "decreased";
	}

	if (confidenceData.lastMonth === continuedDirection) {
		confidenceData.times++;
	} else {
		i = 50;
	}
}

if (confidenceData.times === 1) {
	confidenceData.times = "";
	confidenceData.has = "";	
	confidenceData.multiple = "";	
}


module.exports = confidenceData;