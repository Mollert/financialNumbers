
const lowToCurrent = (recent) => {

	let firstOfYearClose = 3230.78;

	let lowClose = {
		date: "March 23rd",
		value: 2237.40
	}

	let spFrom = {
		lowPercent: 0,
		lowDate: lowClose.date,
		ytdPercent: 0
	}

	spFrom.lowPercent = ((recent - lowClose.value) / lowClose.value) * 100;
	spFrom.lowPercent = (spFrom.lowPercent).toFixed(1);

	spFrom.ytdPercent = ((recent - firstOfYearClose) / firstOfYearClose) * 100;
	if (spFrom.ytdPercent < 0) {
		spFrom.ytdPercent = spFrom.ytdPercent * -1;
	}
	spFrom.ytdPercent = (spFrom.ytdPercent).toFixed(1);

	return spFrom;
};


module.exports = lowToCurrent;