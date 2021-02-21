
let retailSales = require("../dataNumbers/retailSales.js");


let change = 0;

for (let i = 0 ; i < 10 ; i++) {

	change = ((retailSales[i].sales - retailSales[i+1].sales) / retailSales[i+1].sales) * 100;

	console.log(change.toFixed(2));
}

let calculateSales = "Want to run the Retail Sales Data in Git Bash";
module.exports = calculateSales;