// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.

function getCount(str) {
	var vowelsCount = 0;
	var strSplit = str.split('');
	for (var i = 0; i < strSplit.length; i++) {
		if (strSplit[i] === "a" || strSplit[i] === "e" || strSplit[i] === "i" || strSplit[i] === "o" || strSplit[i] === "u") {
			vowelsCount++;
		}
	}
	return vowelsCount;
}

// var str = "Atabay";
// var strSplit = str.split('');
// console.log(strSplit);