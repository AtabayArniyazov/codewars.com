// ---------------------------------------------------------------------------------------------------------------------------
//Моё решение!!!!!!!!!!!!!!!!!!!!!!!!!
// const arr = N => [ /* the numbers 0 to N-1 */ ];
function arr(number) {
	var myArr = [];
	for (var i = 0; i < number; i++) {
		myArr.push(i);
	}
	return myArr;
}

// ---------------------------------------------------------------------------------------------------------------------------
//Лучшее решение!!!!!!!!!!!!!!!!!!!!!!!!! не понятное :-(
// const arr = n => Array.from({length: n}, (_, i) => i);