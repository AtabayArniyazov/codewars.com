// примеры с методом reduce


// !!!второй пример!!! усложняем!!!
var myArray = [{name: "Atabay", age: 27}, 
			   {name: "Lena", age: 24},
			   {name: "Dawutjan", age: 1}, 
			   {name: "Ibrayimjan", age: 2}, 
			   {name: "Abadan", age: 23}, 
			   {name: "Mamulik", age: 47}];

var result = "Итого в сумме, Вам " + summ(myArray) + " лет!";

function summ(yourAge) {
	return yourAge.reduce(function(prev, current, index, arr){
		return (prev + current.age);
	}, 0);
}

console.log(result);


//--------------------------------------------------------------------------------------------------------------------------------
// !!!первый пример!!!
// var myArray = [27, 24, 1, 2, 23, 47];


// function summ(age) {
// 	return age.reduce(function(previousValue, currentItem, index, arr) {
// 		return (previousValue + currentItem);
// 	});
// }

// summ(myArray);