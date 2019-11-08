
const fedFundsRate = [
	{
		date1: 201910,
		date2: "October 30th, 2019",
		direction: "lowered",
		amount: 0.25,
		newRate: 1.625
	},{
		date1: 201909,
		date2: "September 19th, 2019",
		direction: "lowered",
		amount: 0.25,
		newRate: 1.875
	},{
		date1: 201907,
		date2: "August 1st, 2019",
		direction: "lowered",
		amount: 0.25,
		newRate: 2.125
	},{
		date1: 201812,
		date2: "December 20th, 2018",
		direction: "raised",
		amount: 0.25,
		newRate: 2.375
	},{
		date1: 201809,
		date2: "September 27th, 2018",
		direction: "raised",
		amount: 0.25,
		newRate: 2.125
	},{
		date1: 201806,
		date2: "June 14th, 2018",
		direction: "raised",
		amount: 0.25,
		newRate: 1.875
	},{
		date1:201803,
		date2: "March 22nd, 2018",
		direction: "raised",
		amount: 0.25,
		newRate: 1.625
	},{
		date1: 201712,
		date2: "December 14th, 2017",
		direction: "raised",
		amount: 0.25,
		newRate: 1.375
	},{
		date1: 201706,
		date2: "June 15th, 2017",
		direction: "raised",
		amount: 0.25,
		newRate: 1.125
	},{
		date1: 201703,
		date2: "March 16th, 2017",
		direction: "raised",
		amount: 0.25,
		newRate: 0.875
	},{
		date1: 201612,
		date2: "December 15th, 2016",
		direction: "raised",
		amount: 0.25,
		newRate: 0.625
	},{
		date1: 201512,
		date2: "December 17th, 2015",
		direction: "raised",
		amount: 0.25,
		newRate: 0.375
	},{
		date1: 200812,
		date2: "December 16th, 2008",
		direction: "lowered",
		amount: 0.875,
		newRate: 0.125
	},{
		date1: 200810,
		date2: "October 29th, 2008",
		direction: "lowered",
		amount: 0.50,
		newRate: 1.00
	},{
		date1: 200809,
		date2: "September 30th, 2008",
		direction: "lowered",
		amount: 0.50,
		newRate: 1.50
	},{
		date1: 200804,
		date2: "April 30th, 2008",
		direction: "lowered",
		amount: 0.25,
		newRate: 2.00
	},{
		date1: 200803,
		date2: "March 18th, 2008",
		direction: "lowered",
		amount: 0.75,
		newRate: 2.25
	},{
		date1: 200802,
		date2: "February 1st, 2008",
		direction: "lowered",
		amount: 0.50,
		newRate: 3.00
	},{
		date1: 200801,
		date2: "January 22nd, 2008",
		direction: "lowered",
		amount: 0.75,
		newRate: 3.50
	},{
		date1: 200712,
		date2: "December 11th, 2007",
		direction: "lowered",
		amount: 0.25,
		newRate: 4.25
	},{
		date1: 200710,
		date2: "October 31th, 2007",
		direction: "lowered",
		amount: 0.25,
		newRate: 4.50
	},{
		date1: 200709,
		date2: "September 18th, 2007",
		direction: "lowered",
		amount: 0.50,
		newRate: 4.75
	},{
		date1: 200606,
		date2: "June 29th, 2006",
		direction: "raised",
		amount: 0.25,
		newRate: 5.25
	},{
		date1: 200605,
		date2: "May 10th, 2006",
		direction: "raised",
		amount: 0.25,
		newRate: 5.00
	},{
		date1: 200603,
		date2: "March 28th, 2006",
		direction: "raised",
		amount: 0.25,
		newRate: 4.75
	},{
		date1: 200601,
		date2: "January 31st, 2006",
		direction: "raised",
		amount: 0.25,
		newRate: 4.50
	},{
		date1: 200512,
		date2: "December 13th, 2005",
		direction: "raised",
		amount: 0.25,
		newRate: 4.25
	},{
		date1: 200511,
		date2: "November 1st, 2005",
		direction: "raised",
		amount: 0.25,
		newRate: 4.00
	},{
		date1: 200509,
		date2: "September 20th, 2005",
		direction: "raised",
		amount: 0.25,
		newRate: 3.75
	},{
		date1: 200508,
		date2: "August 9th, 2005",
		direction: "raised",
		amount: 0.25,
		newRate: 3.50
	},{
		date1: 200506,
		date2: "June 30th, 2005",
		direction: "raised",
		amount: 0.25,
		newRate: 3.25
	},{
		date1: 200505,
		date2: "May 3rd, 2005",
		direction: "raised",
		amount: 0.25,
		newRate: 3.00
	},{
		date1: 200503,
		date2: "March 22nd, 2005",
		direction: "raised",
		amount: 0.25,
		newRate: 2.75
	},{
		date1: 200502,
		date2: "February 2nd, 2005",
		direction: "raised",
		amount: 25,
		newRate: 2.50
	},{
		date1: 200412,
		date2: "December 14th, 2004",
		direction: "raised",
		amount: 0.25,
		newRate: 2.25
	},{
		date1: 200411,
		date2: "November 10th, 2004",
		direction: "raised",
		amount: 0.25,
		newRate: 2.00
	},{
		date1: 200409,
		date2: "September 21st, 2004",
		direction: "raised",
		amount: 0.25,
		newRate: 1.75
	},{
		date1: 200408,
		date2: "August 10th, 2004",
		direction: "raised",
		amount: 0.25,
		newRate: 1.50
	},{
		date1: 200406,
		date2: "June 30th, 2004",
		direction: "raised",
		amount: 0.25,
		newRate: 1.25
	},{
		date1: 200306,
		date2: "June 25th, 2003",
		direction: "lowered",
		amount: 0.25,
		newRate: 1.00
	},{
		date1: 200211,
		date2: "November 6th, 2002",
		direction: "lowered",
		amount: 0.50,
		newRate: 1.25
	},{
		date1: 200112,
		date2: "December 11th, 2001",
		direction: "lowered",
		amount: 0.25,
		newRate: 1.75
	},{
		date1: 200111,
		date2: "November 6th, 2001",
		direction: "lowered",
		amount: 0.50,
		newRate: 2.00
	},{
		date1: 200110,
		date2: "October 2nd, 2001",
		direction: "lowered",
		amount: 0.50,
		newRate: 2.50
	},{
		date1: 200109,
		date2: "September 17th, 2001",
		direction: "lowered",
		amount: 0.50,
		newRate: 3.00
	},{
		date1: 200108,
		date2: "August 21st, 2001",
		direction: "lowered",
		amount: 0.25,
		newRate: 3.50
	},{
		date1: 200106,
		date2: "June 27th, 2001",
		direction:"lowered",
		amount: 0.25,
		newRate: 3.75
	},{
		date1: 200105,
		date2: "May 15th, 2001",
		direction: "lowered",
		amount: 0.50,
		newRate: 4.00
	},{
		date1: 200104,
		date2: "April 18th, 2001",
		direction: "lowered",
		amount: 0.50,
		newRate: 4.50
	},{
		date1: 200103,
		date2: "March 20th, 2001",
		direction: "lowered",
		amount: 0.50,
		newRate: 5.00
	},{
		date1: 200102,
		date2: "February 1st, 2001",
		direction: "lowered",
		amount: 0.50,
		newRate: 5.50
	},{
		date1: 200101,
		date2: "January 3rd, 2001",
		direction: "lowered",
		amount: 0.50,
		newRate: 6.00
	},{
		date1: 200005,
		date2: "May 16th, 2000",
		direction: "raised",
		amount: 0.50,
		newRate: 6.50
	},{
		date1: 200003,
		date2: "March 21st, 2000",
		direction: "raised",
		amount: 0.25,
		newRate: 6.00
	},{
		date1: 200002,
		date2: "February 2nd, 2000",
		direction: "raised",
		amount: 0.25,
		newRate: 5.75
	},{
		date1: 199911,
		date2: "november 16th, 1999",
		direction: "raised",
		amount: 0.25,
		newRate: 5.50
	},{
		date1: 199908,
		date2: "August 24th, 1999",
		direction: "raised",
		amount: 0.25,
		newRate: 5.25
	},{
		date1: 199906,
		date2: "June 30th, 1999",
		direction: "raised",
		amount: 0.25,
		newRate: 5.00
	},{
		date1: 199811,
		date2: "November 17th, 1998",
		direction: "lowered",
		amount: 0.25,
		newRate: 4.75
	},{
		date1: 199810,
		date2: "October 15th, 1998",
		direction: "lowered",
		amount: 0.25,
		newRate: 5.00
	},{
		date1: 199809,
		date2: "September 29th, 1998",
		direction: "lowered",
		amount: 0.25,
		newRate: 5.25
	},{
		date1: 199703,
		date2: "March 25th, 1997",
		direction: "raised",
		amount: 0.25,
		newRate: 5.50
	},{
		date1: 199601,
		date2: "January 31st, 1996",
		direction: "lowered",
		amount: 0.25,
		newRate: 5.25
	},{
		date1: 199512,
		date2: "December 19th, 1995",
		direction: "lowered",
		amount: 0.25,
		newRate: 5.50
	},{
		date1: 199507,
		date2: "July 6th, 1995",
		direction: "lowered",
		amount: 0.25,
		newRate: 5.75
	},{
		date1: 199502,
		date2: "February 1st, 1995",
		direction: "raised",
		amount: 0.50,
		newRate: 6.00
	},{
		date1: 199411,
		date2: "November 15th, 1994",
		direction: "raised",
		amount: 0.75,
		newRate: 5.50
	},{
		date1: 199408,
		date2: "August 16th, 1994",
		direction: "raised",
		amount: 0.50,
		newRate: 4.75
	},{
		date1: 199405,
		date2: "May 17th, 1994",
		direction: "raised",
		amount: 0.50,
		newRate: 4.25
	},{
		date1: 199404,
		date2: "April 18th, 1994",
		direction: "raised",
		amount: 0.25,
		newRate: 3.75
	},{
		date1: 199403,
		date2: "March 22nd, 1994",
		direction: "raised",
		amount: 0.25,
		newRate: 3.50
	},{
		date1: 199402,
		date2: "February 4th, 1994",
		direction: "raised",
		amount: 0.25,
		newRate: 3.25
	},{
		date1: 199209,
		date2: "September 4th, 1992",
		direction: "lowered",
		amount: 0.25,
		newRate: 3.00
	},{
		date1: 199207,
		date2: "July 2nd, 1992",
		direction: "lowered",
		amount: 0.50,
		newRate: 3.25
	},{
		date1: 199204,
		date2: "April 9th, 1992",
		direction: "lowered",
		amount: 0.25,
		newRate: 3.75
	},{
		date1: 199112,
		date2: "December 20th, 1991",
		direction: "lowered",
		amount: 0.75,
		newRate: 4.00
	},{
		date1: 199111,
		date2: "November 6th, 1991",
		direction: "lowered",
		amount: 0.25,
		newRate: 4.75
	},{
		date1: 199110,
		date2: "October 31st, 1991",
		direction: "lowered",
		amount: 0.25,
		newRate: 5.00
	},{
		date1: 199109,
		date2: "September 13th, 1991",
		direction: "lowered",
		amount: 0.25,
		newRate: 5.25
	},{
		date1: 199108,
		date2: "August 6th, 1991",
		direction: "lowered",
		amount: 0.25,
		newRate: 5.50
	},{
		date1: 199104,
		date2: "April 30th, 1991",
		direction: "lowered",
		amount: 0.25,
		newRate: 5.75
	},{
		date1: 199103,
		date2: "March 8th, 1991",
		direction: "lowered",
		amount: 0.25,
		newRate: 6.00
	},{
		date1: 199102,
		date2: "February 1st, 1991",
		direction: "lowered",
		amount: 0.50,
		newRate: 6.25
	},{
		date1: 199101,
		date2: "January 9th, 1991",
		direction: "lowered",
		amount: 0.25,
		newRate: 6.75
	},{
		date1: 199012,
		date2: "December 18th, 1990",
		direction: "lowered",
		amount: 0.50,
		newRate: 7.00
	},{
		date1: 199011,
		date2: "November 13th, 1990",
		direction: "lowered",
		amount: 0.25,
		newRate: 7.50
	},{
		date1: 199010,
		date2: "October 29th, 1990",
		direction: "lowered",
		amount: 0.25,
		newRate: 7.75
	},{
		date1: 199007,
		date2: "July 13th, 1990",
		direction: "lowered",
		amount: 0.25,
		newRate: 8.00
	}
];

// https://www.federalreserve.gov/monetarypolicy/openmarket.htm


module.exports = fedFundsRate;