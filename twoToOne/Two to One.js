// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing 
// distinct letters, - each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// ---------------------------------------------------------------------------------------------------------------------------
//Моё решение!!!!!!!!!!!!!!!!!!!!!!!!!
function longest(s1, s2) {
	var resultOfStr = s1 + s2;
	var result = [];
	sortString(resultOfStr);

	function sortString(str) {
		var arr = str.split('');
		arr = arr.sort();
		str = arr.join('');

		for (var i = 0, j = 0; i < str.length+1; i++) {
			j = str[i];

			if (j != str[i+1]) {
				result.push(j);
			}
		}
	}
	return result.join('');
}


// ---------------------------------------------------------------------------------------------------------------------------
//Лучшее решение!!!!!!!!!!!!!!!!!!!!!!!!!
// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')