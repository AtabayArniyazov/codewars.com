// Don't give me five!
// Example:
// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

//Моё решение!!!

function dontGiveMeFive(start, end) {
	var result = [];
	for (var i = start; i < (end + 1); i++) {
		var str = String(i);
		function searh5(numb, string) {
			if (str.search(numb) != -1) {
				return true;
			} else {
				return false;
			}
		}
		if (searh5(5, str) === false) {
			result.push(i);
		}
	}

	return result.length;
}

// !!! лучшее решение !!!
// const dontGiveMeFive=(s,e)=>[...Array(e-s+1)].reduce((r,_,n)=>r+!/5/.test(n+s),0)