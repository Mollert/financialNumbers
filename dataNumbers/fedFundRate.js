
const fedFundRate = [
	{
		date: 201909,
		direction: "down",
		amount: 0.25,
		newRate: 1.875
	},{
		date: 201907,
		direction: "down",
		amount: 0.25,
		newRate: 2.125
	},{
		date: 201812,
		direction: "up",
		amount: 0.25,
		newRate: 2.375
	},{
		date: 201809,
		direction: "up",
		amount: 0.25,
		newRate: 2.125
	},{
		date: 201806,
		direction: "up",
		amount: 0.25,
		newRate: 1.875
	},{
		date:201803,
		direction: "up",
		amount: 0.25,
		newRate: 1.625
	},{
		date: 201712,
		direction: "up",
		amount: 0.25,
		newRate: 1.375
	},{
		date: 201706,
		direction: "up",
		amount: 0.25,
		newRate: 1.125
	},{
		date: 201703,
		direction: "up",
		amount: 0.25,
		newRate: 0.875
	},{
		date: 201612,
		direction: "up",
		amount: 0.25,
		newRate: 0.625
	},{
		date: 201512,
		direction: "up",
		amount: 0.25,
		newRate: 0.375
	},{
		date: 200812,
		direction: "down",
		amount: 0.875,
		newRate: 0.125
	},{
		date: 200810,
		direction: "down",
		amount: 0.50,
		newRate: 1.00
	},{
		date: 200809,
		direction: "down",
		amount: 0.50,
		newRate: 1.50
	},{
		date: 200804,
		direction: "down",
		amount: 0.25,
		newRate: 2.00
	},{
		date: 200803,
		direction: "down",
		amount: 0.75,
		newRate: 2.25
	},{
		date: 200802,
		direction: "down",
		amount: 0.50,
		newRate: 3.00
	},{
		date: 200801,
		direction: "down",
		amount: 0.75,
		newRate: 3.50
	},{
		date: 200712,
		direction: "down",
		amount: 0.25,
		newRate: 4.25
	},{
		date: 200710,
		direction: "down",
		amount: 0.25,
		newRate: 4.50
	},{
		date: 200709,
		direction: "down",
		amount: 0.50,
		newRate: 4.75
	},{
		date: 200606,
		direction: "up",
		amount: 0.25,
		newRate: 5.25
	},{
		date: 200605,
		direction: "up",
		amount: 0.25,
		newRate: 5.00
	},{
		date: 200603,
		direction: "up",
		amount: 0.25,
		newRate: 4.75
	},{
		date: 200601,
		direction: "up",
		amount: 0.25,
		newRate: 4.50
	},{
		date: 200512,
		direction: "up",
		amount: 0.25,
		newRate: 4.25
	},{
		date: 200511,
		direction: "up",
		amount: 0.25,
		newRate: 4.00
	},{
		date: 200509,
		direction: "up",
		amount: 0.25,
		newRate: 3.75
	},{
		date: 200508,
		direction: "up",
		amount: 0.25,
		newRate: 3.50
	},{
		date: 200506,
		direction: "up",
		amount: 0.25,
		newRate: 3.25
	},{
		date: 200505,
		direction: "up",
		amount: 0.25,
		newRate: 3.00
	},{
		date: 200503,
		direction: "up",
		amount: 0.25,
		newRate: 2.75
	},{
		ddate: 200502,
		direction: "up",
		amount: 25,
		newRate: 2.50
	},{
		date: 200412,
		direction: "up",
		amount: 0.25,
		newRate: 2.25
	},{
		date: 200411,
		direction: "up",
		amount: 0.25,
		newRate: 2.00
	},{
		date: 200409,
		direction: "up",
		amount: 0.25,
		newRate: 1.75
	},{
		date: 200408,
		direction: "up",
		amount: 0.25,
		newRate: 1.50
	},{
		date: 200406,
		direction: "up",
		amount: 0.25,
		newRate: 1.25
	},{
		date: 200306,
		direction: "down",
		amount: 0.25,
		newRate: 1.00
	},{
		date: 200211,
		direction: "down",
		amount: 0.50,
		newRate: 1.25
	},{
		date: 200112,
		direction: "down",
		amount: 0.25,
		newRate: 1.75
	},{
		date: 200111,
		direction: "down",
		amount: 0.50,
		newRate: 2.00
	},{
		date: 200110,
		direction: "down",
		amount: 0.50,
		newRate: 2.50
	},{
		date: 200109,
		direction: "down",
		amount: 0.50,
		newRate: 3.00
	},{
		date: 200108,
		direction: "down",
		amount: 0.25,
		newRate: 3.50
	},{
		date: 200106,
		direction:"down",
		amount: 0.25,
		newRate: 3.75
	},{
		date: 200105,
		direction: "down",
		amount: 0.50,
		newRate: 4.00
	},{
		date: 200104,
		direction: "down",
		amount: 0.50,
		newRate: 4.50
	},{
		date: 200103,
		direction: "down",
		amount: 0.50,
		newRate: 5.00
	},{
		date: 200102,
		direction: "down",
		amount: 0.50,
		newRate: 5.50
	},{
		date: 200101,
		direction: "down",
		amount: 0.50,
		newRate: 6.00
	},{
		date: 200005,
		direction: "up",
		amount: 0.50,
		newRate: 6.50
	},{
		date: 200003,
		direction: "up",
		amount: 0.25,
		newRate: 6.00
	},{
		date: 200002,
		direction: "up",
		amount: 0.25,
		newRate: 5.75
	},{
		date: 199911,
		direction: "up",
		amount: 0.25,
		newRate: 5.50
	},{
		date: 199908,
		direction: "up",
		amount: 0.25,
		newRate: 5.25
	},{
		date: 199906,
		direction: "up",
		amount: 0.25,
		newRate: 5.00
	},{
		date: 199811,
		direction: "down",
		amount: 0.25,
		newRate: 4.75
	},{
		date: 199810,
		direction: "down",
		amount: 0.25,
		newRate: 5.00
	},{
		date: 199809,
		direction: "down",
		amount: 0.25,
		newRate: 5.25
	}
];


//module.exports = ;