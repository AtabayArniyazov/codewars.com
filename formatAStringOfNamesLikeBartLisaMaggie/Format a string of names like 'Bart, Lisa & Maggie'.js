// Description:
// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated 
// by an ampersand.

// Example:
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// //returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// //returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// //returns 'Bart'

// list([])
// //returns ''

// ---------------------------------------------------------------------------------------------------------------------------------
// !!!Моё решение!!!

// function list(names){
// 	if (names.length < 1) {
// 		return "";
// 	}

// 	if (names.length === 1) {
// 		return (names[0].name);
// 	}
// 	if (names.length === 2) {
// 		return (names[0].name + " & " + names[1].name);
// 	}
// 	if (names.length === 3) {
// 		return (names[0].name + ", " + names[1].name + " & " + names[2].name);
// 	}
// 	if (names.length === 4) {
// 		return (names[0].name + ", " + names[1].name + ", " + names[2].name + " & " + names[3].name);
// 	}
// 	if (names.length === 5) {
// 		return (names[0].name + ", " + names[1].name + ", " + names[2].name + ", " + names[3].name + " & " + names[4].name);
// 	}


// 	if (names.length === 6) {
// 		return (names[0].name + ", " + names[1].name + ", " + names[2].name + ", " + names[3].name + ", " + names[4].name + " & " + names[5].name);
// 	}
// 	if (names.length === 7) {
// 		return (names[0].name + ", " + names[1].name + ", " + names[2].name + ", " + names[3].name + ", " + names[4].name + ", " + names[5].name + " & " + names[6].name);
// 	}
// 	if (names.length === 8) {
// 		return (names[0].name + ", " + names[1].name + ", " + names[2].name + ", " + names[3].name + ", " + names[4].name + ", " + names[5].name + ", " + names[6].name + " & " + names[7].name);
// 	}
// 	if (names.length === 9) {
// 		return (names[0].name + ", " + names[1].name + ", " + names[2].name + ", " + names[3].name + ", " + names[4].name + ", " + names[5].name + ", " + names[6].name + ", " + names[7].name + " & " + names[8].name);
// 	}
// 	if (names.length === 10) {
// 		return (names[0].name + ", " + names[1].name + ", " + names[2].name + ", " + names[3].name + ", " + names[4].name + ", " + names[5].name + ", " + names[6].name + ", " + names[7].name + ", " + names[8].name + " & " + names[9].name);
// 	}
// }

// list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]);

// ------------------------------------------------------------------------------------------------------------------------------
// !!! Лучшее решение !!!
function list(names){
	return names.reduce(function(prev, current, index, array){
		if (index === 0){
			return current.name;
    	} else if (index === array.length - 1){
			return prev + ' & ' + current.name;
    	} else {
    		return prev + ', ' + current.name;
    	}
  	}, '');
 }