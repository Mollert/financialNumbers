
let fedFundsRate = require("../dataNumbers/fedFundsRate.js");

// Changes months to years and months
const formatMonths = (month) => {
	if (month === 1) {
		return month + " month";
	} else if (month < 12) {
		return month + " months";		
	} else {
		let yearPlus = parseInt(month / 12);
		let monthPlus = month % 12;
		if (yearPlus === 1 && monthPlus === 0) {
			return yearPlus + " year";
		} else if (yearPlus === 1 && monthPlus === 1) {
			return "1 year 1 month";
		} else if (yearPlus > 1 && monthPlus === 0) {
			return yearPlus + " years";
		} else if (yearPlus > 1 && monthPlus === 1) {
			return yearPlus + " years 1 month";
		} else {
			return yearPlus + " years " + monthPlus + " months";
		}
	}
};


// Separate months from years
let monthRecent = fedFundsRate[0].date1 % 100;
let yearRecent = parseInt(fedFundsRate[0].date1 / 100);
let monthLast = fedFundsRate[1].date1 % 100;
let yearLast = parseInt(fedFundsRate[1].date1 / 100);
// Adding all the months together
let monthsTotalRecent = (yearRecent * 12) + monthRecent;
let monthsTotalLast = (yearLast * 12) + monthLast;
// Subtracting to find the months between dates
let monthsDif = parseInt(monthsTotalRecent - monthsTotalLast);

let preparedLast = formatMonths(monthsDif);



let monthPrior = fedFundsRate[2].date1 % 100;
let yearPrior = parseInt(fedFundsRate[2].date1 / 100);

let monthsTotalPrior = (yearPrior * 12) + monthPrior;

let monthsPriorDif = parseInt(monthsTotalLast - monthsTotalPrior);

let preparedPrior = formatMonths(monthsPriorDif);


let fedFundsData = {
	moveDate: fedFundsRate[0].date2,
	directionRecent: fedFundsRate[0].direction,
	amountRecent: fedFundsRate[0].amount,
	rateRecent: fedFundsRate[0].newRate,
	directionLast: fedFundsRate[1].direction,
	formattedLast: preparedLast,
	amountLast: fedFundsRate[1].amount,
	formattedPrior: preparedPrior,
	directionPrior: fedFundsRate[2].direction,
	amountPrior: fedFundsRate[2].amount
};


module.exports = fedFundsData;