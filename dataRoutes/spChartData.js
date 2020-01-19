
//let closes = ["2966.6", "2991.78", "2992.07", "3006.79", "3006.73", "3005.7"];

let spPlacement = {
	divWidth: 0,
	barFiveValueLeft: 0,
	barFiveValue: 0,
	barFiveLeft: 0,
	barFiveWidth: 0,
	barFiveBackground: "blue",
	barFiveBefore: "",
	barFiveAfter: "",
	barFourLeft: 0,
	barFourWidth: 0,
	barFourBackground: "blue",
	barFourBefore: "",
	barFourAfter: "",
	barThreeLeft: 0,
	barThreeWidth: 0,
	barThreeBackground: "blue",
	barThreeBefore: "",
	barThreeAfter: "",
	barTwoLeft: 0,
	barTwoWidth: 0,
	barTwoBackground: "blue",
	barTwoBefore: "",
	barTwoAfter: "",
	barOneLeft: 0,
	barOneWidth: 0,
	barOneBackground: "blue",
	barOneBefore: "",
	barOneAfter: "",
	barOneValueLeft: 0,
	barOneValue: 0
};
// Picks the background color due to positive or negative number
const whichBackground = (sign) => {
	if (sign > 0) {
		return "green";
	} else {
		return "red";
	}
};


const prepareChartData = (values) => {
	let gaps = [];
	let gapsPos = [];
	let gapTally = 0;

	let overallSpan = 0;

	let posSide = 0;
	let negSide = 0;
// Creating the difference between the closes.  Turn into a 2 place decimal number
	for ( let i = 5 ; i > 0 ; i--) {
		let transfer = values[i - 1] - values[i];
		transfer = Math.round(transfer * 100) / 100;
		gaps.push(transfer);
	// Limiting the display width
		if (transfer < 4.8 && transfer >= 0) {
			transfer = 4.80;
		}
		if (transfer > -4.8 && transfer < 0) {
			transfer = -4.80;
		}
	// Gathering both positive and negative numbers to arrive at overall width of chart
		gapTally = gapTally + transfer;
		if (gapTally > posSide) {
			posSide = gapTally;
		}
		if (gapTally < negSide) {
			negSide = gapTally;
		}
	// Create second array of all positive widths
		if (transfer < 0) {
			transfer = transfer * -1;
		}

		gapsPos.push(transfer);
	}


	overallSpan = posSide - negSide;
// 1 (insurance) + 5 (in rem's neg barText) + overallSpan/16 + 5 (rem's pos barText) + 1 (insurance)
	spPlacement.divWidth = 1 + 5 + (overallSpan / 16) + 5 + 1;

// bar 5
	spPlacement.barFiveWidth = gapsPos[0] / 16;
	// Placing first width with left side margin.  1 (insurance) + negative number if positive.  Subtract width if negative 
	if(gaps[0] > 0) {
		spPlacement.barFiveLeft = 1 + ((negSide * -1) / 16);
	} else {
		spPlacement.barFiveLeft = 1 + ((negSide * -1) / 16) - spPlacement.barFiveWidth;
	}
	spPlacement.barFiveBackground = whichBackground(gaps[0]);
	// Placing number before or after the width due to gain or loss
	if(gaps[0] > 0) {
		spPlacement.barFiveAfter = gaps[0];
	} else {
		spPlacement.barFiveBefore = gaps[0];
	}
	// Center close over width of first entry
	spPlacement.barFiveValueLeft = spPlacement.barFiveLeft + 5 + ((gapsPos[0] / 2) / 16) - 2;
	let fiveValue = parseFloat(values[4]);
	spPlacement.barFiveValue = fiveValue.toFixed(2);
// bar 4
	spPlacement.barFourWidth = gapsPos[1] / 16;
	if(gaps[0] > 0) {
		if(gaps[1] > 0) {
			spPlacement.barFourLeft = spPlacement.barFiveLeft + (gapsPos[0] / 16);
		} else {
			spPlacement.barFourLeft = spPlacement.barFiveLeft + (gapsPos[0] / 16) - (gapsPos[1] / 16);			
		}
	} else {
		if(gaps[1] > 0) {
			spPlacement.barFourLeft = spPlacement.barFiveLeft;
		} else {
			spPlacement.barFourLeft = spPlacement.barFiveLeft - (gapsPos[1] / 16);			
		}		
	}
	spPlacement.barFourBackground = whichBackground(gaps[1]);
	if(gaps[1] > 0) {
		spPlacement.barFourAfter = gaps[1];
	} else {
		spPlacement.barFourBefore = gaps[1];
	}
// bar 3
	spPlacement.barThreeWidth = gapsPos[2] / 16;
	if(gaps[1] > 0) {
		if(gaps[2] > 0) {
			spPlacement.barThreeLeft = spPlacement.barFourLeft + (gapsPos[1] / 16);
		} else {
			spPlacement.barThreeLeft = spPlacement.barFourLeft + (gapsPos[1] / 16) - (gapsPos[2] / 16);			
		}
	} else {
		if(gaps[2] > 0) {
			spPlacement.barThreeLeft = spPlacement.barFourLeft;
		} else {
			spPlacement.barThreeLeft = spPlacement.barFourLeft - (gapsPos[2] / 16);			
		}		
	}
	spPlacement.barThreeBackground = whichBackground(gaps[2]);
	if(gaps[2] > 0) {
		spPlacement.barThreeAfter = gaps[2];
	} else {
		spPlacement.barThreeBefore = gaps[2];
	}
// bar 2
	spPlacement.barTwoWidth = gapsPos[3] / 16;
	if(gaps[2] > 0) {
		if(gaps[3] > 0) {
			spPlacement.barTwoLeft = spPlacement.barThreeLeft + (gapsPos[2] / 16);
		} else {
			spPlacement.barTwoLeft = spPlacement.barThreeLeft + (gapsPos[2] / 16) - (gapsPos[3] / 16);			
		}
	} else {
		if(gaps[3] > 0) {
			spPlacement.barTwoLeft = spPlacement.barThreeLeft;
		} else {
			spPlacement.barTwoLeft = spPlacement.barThreeLeft - (gapsPos[3] / 16);			
		}		
	}
	spPlacement.barTwoBackground = whichBackground(gaps[3]);
	if(gaps[3] > 0) {
		spPlacement.barTwoAfter = gaps[3];
	} else {
		spPlacement.barTwoBefore = gaps[3];
	}
// bar 1
	spPlacement.barOneWidth = gapsPos[4] / 16;
	if(gaps[3] > 0) {
		if(gaps[4] > 0) {
			spPlacement.barOneLeft = spPlacement.barTwoLeft + (gapsPos[3] / 16);
		} else {
			spPlacement.barOneLeft = spPlacement.barTwoLeft + (gapsPos[3] / 16) - (gapsPos[4] / 16);			
		}
	} else {
		if(gaps[4] > 0) {
			spPlacement.barOneLeft = spPlacement.barTwoLeft;
		} else {
			spPlacement.barOneLeft = spPlacement.barTwoLeft - (gapsPos[4] / 16);			
		}		
	}
	spPlacement.barOneBackground = whichBackground(gaps[4]);
	if(gaps[4] > 0) {
		spPlacement.barOneAfter = gaps[4];
	} else {
		spPlacement.barOneBefore = gaps[4];
	}

	spPlacement.barOneValueLeft = spPlacement.barOneLeft + 5 + ((gapsPos[4] / 2) / 16) - 2;
	let oneValue = parseFloat(values[0]);	
	spPlacement.barOneValue = oneValue.toFixed(2);

	return spPlacement;
};

//prepareChartData(closes);


module.exports = { prepareChartData, spPlacement }; 