// ---------------------------------------------------------------------------------------------------------------------------
//Моё решение!!!!!!!!!!!!!!!!!!!!!!!!!
// const binaryArrayToNumber = arr => {
// 	var result = String(arr);
// 	return result.toString(10);
// };

function binaryArrayToNumber(arr) {
	var result = "";

	for (var i = 0; i < arr.length; i++) {
		result = result + arr[i];
	}

	return parseInt(result, 2);
}

// ---------------------------------------------------------------------------------------------------------------------------
//Лучшее решение!!!!!!!!!!!!!!!!!!!!!!!!!
// const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);
