// ---------------------------------------------------------------------------------------------------------------------------
//Моё решение!!!!!!!!!!!!!!!!!!!!!!!!!
function findNeedle(haystack) {
	for (var i = 0; i < haystack.length; i++) {
		if (haystack[i] === "needle") {
			return "found the needle at position " + i;
		}
	}
}

// ---------------------------------------------------------------------------------------------------------------------------
//Лучшее решение!!!!!!!!!!!!!!!!!!!!!!!!!
// function findNeedle(haystack) {
//   return "found the needle at position " + haystack.indexOf("needle");
// }
