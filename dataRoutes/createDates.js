
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const decimalMonths = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

// Selects day description due to number
const tailEnd = (whatDay) => {
	if (whatDay === 1 || whatDay === 21 || whatDay === 31) {
		return "st";
	} else if (whatDay === 2 || whatDay === 22) {
		return "nd";
	} else if (whatDay === 3 || whatDay === 23) {
		return "rd";
	} else {
		return "th";
	}
}
// Picks how many days to backup to start the FRED query due to weekend or holiday or first day comparison
const daysSubtracted = (start) => {
	if (start === 0) {
		return 10;
	} else if (start === 1) {
		return 11;
	} else {
		return 9;
	}
}
// Adds "0" in front of singular days in order to mesh with FRED requirements
const addZero = (submit) => {
	if (submit < 10) {
		return ("0" + submit.toString());
	} else {
		return submit;
	}
}

let rightNow = new Date(Date.now());

let today = daysOfWeek[rightNow.getDay()] + ", " + monthsOfYear[rightNow.getMonth()] + " " + rightNow.getDate() + tailEnd(rightNow.getDate());

let startDays = daysSubtracted(rightNow.getDay());
let starting = new Date(Date.now() - (startDays * 86400000));

let dateStart = starting.getFullYear() + "-" + decimalMonths[starting.getMonth()] + "-" + addZero(starting.getDate());


module.exports = { today, dateStart };