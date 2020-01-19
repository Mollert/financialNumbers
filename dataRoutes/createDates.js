
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
// Adds "0" in front of singular days in order to mesh with FRED requirements
const addZero = (submit) => {
	if (submit < 10) {
		return ("0" + submit.toString());
	} else {
		return submit;
	}
}
// Removes "0" in the front of singular days for displaying on main page
const removeZero = (present) => {
	if (present < 10) {
		return (present.slice(-1));
	} else {
		return present;
	}
}
// Rearrange date from querry to show analog date on main page
const toReadableTime = (past) => {
	let recYear = past.slice(0, 4);
	let recMonth = (past.slice(5, 7)) - 1;
	let recDay = past.slice(-2);
	let workingDate = new Date(recYear, recMonth, recDay);
	return (daysOfWeek[workingDate.getDay()] + ", " + monthsOfYear[workingDate.getMonth()] + " " + removeZero(recDay) + tailEnd(removeZero(recDay)) + " " + recYear);
}


let rightNow = new Date(Date.now());
// Create todays date which shows at top panel on main page
let today = daysOfWeek[rightNow.getDay()] + ", " + monthsOfYear[rightNow.getMonth()] + " " + rightNow.getDate() + tailEnd(rightNow.getDate());

// Creating begining date for Fed FRED querry on mainPageRoute
let todayDate = new Date();
let starting = new Date().setDate(todayDate.getDate() - 40);
starting = new Date(starting);

let dateStart = starting.getFullYear() + "-" + decimalMonths[starting.getMonth()] + "-" + addZero(starting.getDate());


module.exports = { today, dateStart, toReadableTime };