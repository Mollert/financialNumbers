
let dollarIndex = require("../dataNumbers/dollarIndex.js");

let dolIndex = {
	dollarMonth: "",
	dollarPrice: dollarIndex[0].price,
	yearFirst: 0,
	average1: "",
	year1: 0,
	average2: "",
	year2: 0,
	average3: "",
	year3: 0
}

// Find latest month and its index price

		const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

		let dateString = (dollarIndex[0].date).toString();
		let month = dateString.slice(4, 6);
		dolIndex.dollarMonth = monthsOfYear[month-1];

// Find the index price at first of the year 

		let firstMonth = "";
		if (month !== "01") {
			firstMonth = (Number(month)) - 1;		
		} else {
			firstMonth = month;
		}
		dolIndex.yearFirst = dollarIndex[firstMonth].price;

// Find yearly averages for last three years

		const findAverage = (bit) => {
			let capture = 0;
			let allAdded = 0;
			for (let i = bit ; i < 50 ; i++) {
				capture = dollarIndex[i].price;
				allAdded = allAdded + capture;
				if (i === (bit + 11)) {
					i = 50;
				}
			}
			return (allAdded / 12).toFixed(2);
		}

		let justYear = parseInt(dollarIndex[0].date / 100);
		let firstYear = justYear - 1;

		let theI = 0;

		for (let i = 0 ; i < 13 ; i++) {
			let tempYear = parseInt(dollarIndex[i].date / 100);
			if (firstYear === tempYear) {
				theI = i;
				i = 13;				
			}
		}

		dolIndex.average1 = findAverage(theI);
		dolIndex.year1 = justYear - 1;
		dolIndex.average2 = findAverage(theI + 12);
		dolIndex.year2 = justYear - 2;
		dolIndex.average3 = findAverage(theI + 24);
		dolIndex.year3 = justYear - 3;

module.exports = dolIndex;