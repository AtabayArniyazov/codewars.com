// Square and Cubic Factors
// Example:
// factors(16) #=> [[2, 4], [2]]
// 		  # 2 squared is  4;  4 is a factor of 16
// 		  # 4 squared is 16; 16 is a factor of 16
// 		  # 2 cubed is    8;  8 is a factor of 16

//Моё решение!!!

function factors(n) {
	var sq = [];
	var cb = [];
	var result = [];

	for (var i = 2; i < n; i++) {
		if (i * i === n) {
			sq.push(i);
			for (var j = 0; j < sq.length; j++) {
				for (var k = 2; k < sq[j]; k++) {
					if (sq[j] === k * k) {
						sq.push(k);
					}
				}
			}
		}

		if (i * i * i === n) {
			cb.push(i);
		} else if (n % i === 0) {
			for (var l = 2; l < i+1; l++) {
				if (i === l * l * l) {
					cb.push(l);
				} else if (i === l * l) {
					sq.push(l);
					for (var m = 0; m < sq.length; m++) {
						if (sq[m] === l) {
							sq[m] = l;
						}
					}
				}
			}
		}
	}

	function compareNumeric(a, b) {
		return a - b;
	}

	result[0] = sq.sort(compareNumeric);
	result[1] = cb.sort(compareNumeric);

	if (sq[0] === sq[1]) {
		sq.splice(0,1);
	}
	return result;
}

// !!! лучшее решение !!!
// function factors(n) {
//   var sq = [], 
//       cb = [];
//   for(var i=2; i<=Math.sqrt(n); i++){
//     if(n/(i*i)%1===0) sq.push(i);
//     if(n/(i*i*i)%1===0) cb.push(i);
//   }
//   return [sq,cb];
// }