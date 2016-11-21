// ---------------------------------------------------------------------------------------------------------------------------
//Моё решение!!!!!!!!!!!!!!!!!!!!!!!!!
function getAverage(marks){
	var summ = marks.reduce(function(prevV, currI, ind, arr){
		return prevV + currI;
	});
	
	return Math.floor(summ / marks.length);
}

// ---------------------------------------------------------------------------------------------------------------------------
//Лучшее решение!!!!!!!!!!!!!!!!!!!!!!!!!
// function getAverage(marks){
//   return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
// }
