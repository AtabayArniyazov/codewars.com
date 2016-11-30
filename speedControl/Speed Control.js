// Speed Control

//Моё решение!!!

function gps(s, x) {
	var result = [];

	for (var i = 0; i < x.length-1; i++) {
		result.push((x[i + 1] - x[i]) * ((60 / s) * 60));
		result[i] = Math.round(result[i]);
	}

	result.sort(function (a,b) {
		return a - b;
	});

	return x.length <= 1 ? 0 : result[result.length - 1];
}

// !!! лучшее решение !!!
// const gps = (s, x) => Math.floor(3600 * x.slice(1).reduce((m, d, i) => Math.max(m, d - x[i]), 0) / s);