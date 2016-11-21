// ---------------------------------------------------------------------------------------------------------------------------
//Моё решение!!!!!!!!!!!!!!!!!!!!!!!!!
function accum(s) {
	var result = [];
	for (var i = 0; i < s.length; i++) {
		result.push(s[i].toLowerCase().repeat(i+1));
	}

	for (var i = 0; i < result.length; i++) {
		result[i] = result[i].slice(0, 1).toUpperCase() + result[i].slice(1);
	}

	return result.join("-");
}

// ---------------------------------------------------------------------------------------------------------------------------
//Лучшее решение!!!!!!!!!!!!!!!!!!!!!!!!!

// function accum(s) {
//   return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
// }