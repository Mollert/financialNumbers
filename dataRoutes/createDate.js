
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

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

let rightNow = new Date(Date.now());

//let today = daysOfWeek[rightNow.getDay()] + " the " + rightNow.getDate() + tailEnd(rightNow.getDate()) + " of " + monthsOfYear[rightNow.getMonth()];
let today = daysOfWeek[rightNow.getDay()] + ", " + monthsOfYear[rightNow.getMonth()] + " " + rightNow.getDate() + tailEnd(rightNow.getDate());
//console.log(today);

module.exports = today;
