// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] 
// (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// которая будет принимать в сбе след парамаетры. Параметр а будет первое число лимита(а начало). 
// после вызова ф-ции нужно получить массив отсортированный по возрастании которая включает диапазон с а по б.
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// ---------------------------------------------------------------------------------------------------------------------------
//Моё решение!!!!!!!!!!!!!!!!!!!!!!!!!

// function sumDigPow(a, b) {
// 	var result = [];

// 	for (var i = a; i < b+1; i++) {
// 		var arrA = String(i).split('');
		
// 		for (var k = 1; k < arrA.length+1; k++) {
// 			if (arrA.length === k) {
// 				if (i === Math.pow(arrA[0],1) || 
// 					i === Math.pow(arrA[0],1) + Math.pow(arrA[1],2) ||
// 					i === Math.pow(arrA[0],1) + Math.pow(arrA[1],2) + Math.pow(arrA[2],3) ||
// 					i === Math.pow(arrA[0],1) + Math.pow(arrA[1],2) + Math.pow(arrA[2],3) + Math.pow(arrA[3],4) ||
// 					i === Math.pow(arrA[0],1) + Math.pow(arrA[1],2) + Math.pow(arrA[2],3) + Math.pow(arrA[3],4) + Math.pow(arrA[4],5) ||
// 					i === Math.pow(arrA[0],1) + Math.pow(arrA[1],2) + Math.pow(arrA[2],3) + Math.pow(arrA[3],4) + Math.pow(arrA[4],5) + Math.pow(arrA[5],6) ||
// 					i === Math.pow(arrA[0],1) + Math.pow(arrA[1],2) + Math.pow(arrA[2],3) + Math.pow(arrA[3],4) + Math.pow(arrA[4],5) + Math.pow(arrA[5],6) + Math.pow(arrA[6],7)) {
// 						result.push(i);
// 				}
// 			}
// 		}
// 	}
// 	console.log(result);
// }

// --------------------------------------------------------------------------------------------------------------------------
// Лучшее решение!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function sumDigPow(a, b) {
 let values = [];
  for(let i = a; i <= b; i++) {
    let decas = i.toString().split("");
     if (i == decas.reduce(function(previousValue, currentValue, index, array) {  
        return previousValue + Math.pow(currentValue,index+1);
       },0)) {
         values.push(i);
       }
  }
  console.log(values);
}

sumDigPow(89,90);