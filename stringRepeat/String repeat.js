// ---------------------------------------------------------------------------------------------------------------------------
//Моё решение!!!!!!!!!!!!!!!!!!!!!!!!!
function repeatStr(count, str) {
	if (str) {
		var arr = [];
		for (var i = 1; i < count; i++) {
			arr.push(str);	
		}
		return str + arr.join('');
	}

	return -1;
}

// ---------------------------------------------------------------------------------------------------------------------------
//Лучшее решение!!!!!!!!!!!!!!!!!!!!!!!!!

// function repeatStr (n, s) {
//   return s.repeat(n);
// }