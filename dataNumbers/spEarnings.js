//module.exports = {

const spEarnings = [
	{
		date: 201903,
		earings: 35.02,
		trailing: 134.39,
		price: 2834.40,
		pe: 21.30
	},{
		date: 201812,
		earings: 28.96,
		trailing: 132.39,
		price: 2506.85,
		pe: 18.94
	},{
		date: 201809,
		earings: 36.36,
		trailing: 130.39,
		price: 2913.98,
		pe: 22.35
	},{
		date: 201806,
		earings: 34.05,
		trailing: 122.48,
		price: 2718.37,
		pe: 22.19
	},{
		date: 201803,
		earings: 33.02,
		trailing: 115.44,
		price: 2640.87,
		pe: 22.88
	},{
		date: 201712,
		earings: 26.96,
		trailing: 109.88,	
		price: 2673.61,
		pe: 24.33
	},{
		date: 201709,
		earings: 28.45,
		trailing: 107.08,
		price: 2519.36,
		pe: 23.53
	},{
		date: 201706,
		earings: 27.01,
		trailing: 104.02,	
		price: 2423.41,
		pe: 23.30
	},{
		date: 201703,
		earings: 27.46,
		trailing: 100.29,	
		price: 2362.72,
		pe: 23.56
	},{
		date: 201612,
		earings: 24.16,
		trailing: 94.55,	
		price: 2238.83,
		pe: 23.68
	},{
		date: 201609,
		earings: 25.39,
		trailing: 89.09,
		price: 2168.27,
		pe: 24.34
	},{
		date: 201606,
		earings: 23.28,
		trailing: 86.92,
		price: 2098.86,
		pe: 24.15
	},{
		date: 201603,
		earings: 21.72,
		trailing: 86.44,
		price: 2059.74,
		pe: 23.83
	},{
		date: 201512,
		earings: 18.70,
		trailing: 86.53,
		price: 2043.94,
		pe: 23.62
	},{
		date: 201509,
		earings: 23.22,
		trailing: 90.66,
		price: 1920.03,
		pe: 21.18
	},{
		date: 201506,
		earings: 22.80,
		trailing: 94.91,
		price: 2063.11,
		pe: 21.74
	},{
		date: 201503,
		earings: 21.81,
		trailing: 99.25,
		price: 2067.89,
		pe: 20.84
	},{
		date: 201412,
		earings: 22.83,
		trailing: 102.31,
		price: 2058.90,
		pe: 20.12
	},{
		date: 201409,
		earings: 27.47,
		trailing: 105.96,
		price: 1972.29,
		pe: 18.61
	},{
		date: 201406,
		earings: 27.14,
		trailing: 103.12,
		price: 1960.23,
		pe: 19.01
	},{
		date: 201403,
		earings: 24.87,
		trailing: 100.85,
		price: 1872.34,
		pe: 18.57
	},{
		date: 201312,
		earings: 26.48,
		trailing: 100.20,
		price: 1848.36,
		pe: 18.45
	},{
		date: 201309,
		earings: 24.63,
		trailing: 94.37,
		price: 1681.55,
		pe: 17.82
	},{
		date: 201306,
		earings: 24.87,
		trailing: 90.95,
		price: 1606.28,
		pe: 17.66
	},{
		date: 201303,
		earings: 24.22,
		trailing: 87.70,
		price: 1569.19,
		pe: 17.89
	},{
		date: 201212,
		earings: 20.65,
		trailing: 86.51,
		price: 1426.19,
		pe: 16.49
	},{
		date: 201209,
		earings: 21.21,
		trailing: 86.50,
		price: 1440.67,
		pe: 16.66
	},{
		date: 201206,
		earings: 21.62,
		trailing: 87.92,
		price: 1362.16,
		pe: 15.49
	},{
		date: 201203,
		earings: 23.03,
		trailing: 88.54,
		price: 1408.47,
		pe: 15.91
	},{
		date: 201112,
		earings: 20.64,
		trailing: 86.95,
		price: 1257.60,
		pe: 14.46
	},{
		date: 201109,
		earings: 22.63,
		trailing: 86.98,
		price: 1131.42,
		pe: 13.01
	},{
		date: 201106,
		earings: 22.24,
		trailing: 83.87,
		price: 1320.64,
		pe: 15.75
	},{
		date: 201103,
		earings: 21.44,
		trailing: 81.31,
		price: 1325.83,
		pe: 16.31
	},{
		date: 201012,
		earings: 20.67,
		trailing: 77.35,
		price: 1257.64,
		pe: 16.26
	},{
		date: 201009,
		earings: 19.52,
		trailing: 71.86,
		price: 1141.20,
		pe: 15.88
	},{
		date: 201006,
		earings: 19.68,
		trailing: 67.10,
		price: 1030.71,
		pe: 15.36
	},{
		date: 201003,
		earings: 17.48,
		trailing: 60.93,
		price: 1169.43,
		pe: 19.19
	},{
		date: 200912,
		earings: 15.18,
		trailing: 50.97,
		price: 1115.10,
		pe: 21.88
	},{
		date: 200909,
		earings: 14.76,
		trailing: 12.54,
		price: 1057.08,
		pe: 84.30
	},{
		date: 200906,
		earings: 13.51,
		trailing: 7.51,
		price: 919.32,
		pe: 122.41
	},{
		date: 200993,
		earings: 7.52,
		trailing: 6.86,
		price: 797.87,
		pe: 116.31
	},{
		date: 200812,
		earings: -23.25,
		trailing: 14.88,
		price: 903.25,
		pe: 60.70
	},{
		date: 200809,
		earings: 9.73,
		trailing: 45.95,
		price: 1166.23,
		pe: 25.38
	},{
		date: 200806,
		earings: 12.86,
		trailing: 51.37,
		price: 1280.00,
		pe: 24.92
	},{
		date: 200803,
		earings: 15.54,
		trailing: 60.39,
		price: 1322.70,
		pe: 21.90
	},{
		date: 200712,
		earings: 7.82,
		trailing: 66.18,
		price: 1468.36,
		pe: 22.19
	},{
		date: 200709,
		earings: 15.15,
		trailing: 78.60,
		price: 1526.75,
		pe: 19.42
	},{
		date: 200706,
		earings: 21.88,
		trailing: 84.92,
		price: 1503.35,
		pe: 17.70
	},{
		date: 200703,
		earings: 21.33,
		trailing: 83.15,
		price: 1420.86,
		pe: 17.09
	},{
		date: 200612,
		earings: 20.24,
		trailing: 81.51,
		price: 1418.30,
		pe: 17.40
	},{
		date: 200609,
		earings: 21.47,
		trailing: 78.57,
		price: 1335.85,
		pe: 17.00
	},{
		date: 200606,
		earings: 20.11,
		trailing: 1270.20,
		price: 74.49,
		pe: 17.05
	},{
		date: 200603,
		earings: 19.69,
		trailing: 72.67,
		price: 1294.83,
		pe: 17.82
	},{
		date: 200512,
		earings: 17.30,
		trailing: 69.93,
		price: 1248.29,
		pe: 17.85
	},{
		date: 200509,
		earings: 17.39,
		trailing: 66.57,
		price: 1228.81,
		pe: 18.46
	},{
		date: 200506,
		earings: 18.29,
		trailing: 63.36,
		price: 1191.33,
		pe: 18.80
	},{
		date: 200503,
		earings: 16.95,
		trailing: 60.32,
		price: 1180.59,
		pe: 19.57
	},{
		date: 200412,
		earings: 13.94,
		trailing: 58.55,
		price: 1211.92,
		pe: 20.70
	},{
		date: 200409,
		earings: 14.18,
		trailing: 57.77,
		price: 1114.58,
		pe: 19.29
	},{
		date: 200406,
		earings: 15.25,
		trailing: 56.15,
		price: 1140.84,
		pe: 20.32
	},{
		date: 200403,
		earings: 15.18,
		trailing: 52.00,
		price: 1126.21,
		pe: 21.66
	},{
		date: 200312,
		earings: 13.16,
		trailing: 48.74,
		price: 1111.92,
		pe: 22.81
	},{
		date: 200309,
		earings: 12.56,
		trailing: 38.58,
		price: 995.97,
		pe: 25.82
	},{
		date: 200306,
		earings: 11.10,
		trailing: 34.55,
		price: 974.50,
		pe: 28.21
	},{
		date: 200303,
		earings: 11.92,
		trailing: 30.32,
		price: 848.18,
		pe: 27.97
	},{
		date: 200212,
		earings: 3.00,
		trailing: 27.59,
		price: 879.82,
		pe: 31.89
	},{
		date: 200209,
		earings: 8.53,
		trailing: 30.04,
		price: 815.28,
		pe: 27.14
	},{
		date: 200206,
		earings: 6.87,
		trailing: 26.74,
		price: 989.81,
		pe: 37.02
	},{
		date: 200203,
		earings: 9.19,
		trailing: 24.70,
		price: 1147.39,
		pe: 46.45
	},{
		date: 200112,
		earings: 5.45,
		trailing: 24.69,
		price: 1148.08,
		pe: 46.50
	},{
		date: 200109,
		earings: 5.23,
		trailing: 28.31,
		price: 1040.94,
		pe: 36.77
	},{
		date: 200106,
		earings: 4.83,
		trailing: 36.79,
		price: 1224.38,
		pe: 33.28
	},{
		date: 200103,
		earings: 9.18,
		trailing: 45.44,
		price: 1160.33,
		pe: 25.54
	},{
		date: 200012,
		earings: 9.07,
		trailing: 50.00,
		price: 1320.28,
		pe: 26.41
	},{
		date: 200009,
		earings: 13.71,
		trailing: 53.70,
		price: 1436.51,
		pe: 26.75
	},{
		date: 200006,
		earings: 13.48,
		trailing: 51.92,
		price: 1454.60,
		pe: 28.02
	},{
		date: 200003,
		earings: 13.74,
		trailing: 50.95
		price: 1498.58,
		pe: 29.41
	},{
		date: 199912,
		earings: 12.77,
		trailing: 48.17,
		price: 1469.25,
		pe: 30.50
	}
];

// spreadsheet sp-500-eps-est from Standard and Poors
// date is at the end of the month