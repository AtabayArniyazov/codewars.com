// ---------------------------------------------------------------------------------------------------------------------------
//Моё решение!!!!!!!!!!!!!!!!!!!!!!!!!
function findEvenIndex(arr) {
	var n = -1;
	var leftPart = 0;
	var rightPart = 0;

	for (var i = 0; i < arr.length; i++) {
		leftPart = leftPart + arr[i];

		for (var j = i+2; j < arr.length; j++) {
			rightPart = rightPart + arr[j];
		}

		leftPart === rightPart ? n=i+1 : rightPart=0
	}

	return n;
}

// ---------------------------------------------------------------------------------------------------------------------------
//Лучшее решение!!!!!!!!!!!!!!!!!!!!!!!!!
// function findEvenIndex(arr)
// {
//   for(var i=1; i<arr.length-1; i++) {
//     if(arr.slice(0, i).reduce((a, b) =>  a+b) === arr.slice(i+1).reduce((a, b) =>  a+b)) {
//       return i;
//     }
//   }
//   return -1;
// }