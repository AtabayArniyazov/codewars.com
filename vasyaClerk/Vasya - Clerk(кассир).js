// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. 
// Each of them has a single 100, 50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.
// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in 
// the order people follow in the line?
// Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.

// tickets([25, 25, 50]) // => YES 
// tickets([25, 100])    // => NO. Vasya will not have enough money to give change to 100 dollars

//Моё решение!!!

function tickets(peopleInLine){
	change25 = 0;
	change50 = 0;
	change100 = 0;	
		for (var i = 0; i < peopleInLine.length; i++) {
			if (peopleInLine[i] === 25) {
				change25 = change25 + 1;
			}

			if (peopleInLine[i] === 50) {
				if (peopleInLine[0] === 50 || change25 < 1) {
					change25 = 0;
					change50 = 0;
					change100 = 0;
					return "NO"; //No change, please give me 25$!
				} else if (change25 >= 2) {
					change25 = change25 - 1;
					change50 = change50 + 1;
				} else if (change25 >= 1) {
					change25 = change25 - 1;
					change50 = change50 + 1;
				}
			}

			if (peopleInLine[i] === 100) {
				if (peopleInLine[0] === 100 || peopleInLine[1] === 100) {
					change25 = 0;
					change50 = 0;
					change100 = 0;
					return "NO"; //No change, please give me 25$!
				} else if (change25 >= 1 && change50 >= 1) {
					change50 = change50 - 1;
					change25 = change25 - 1;
					change100 = change100 + 1;
				} else if (change25 >= 3) {
					change25 = change25 - 3;
					change100 = change100 + 1;
				} else {
					change25 = 0;
					change50 = 0;
					change100 = 0;
					return "NO"; //No change, please give me 25$!
				}
			}
		}
		return "YES";
}

// !!! лучшее решение !!!

// function tickets(peopleInLine) {
// 	var bills = [0, 0, 0];
// 	for (var i = 0; i < peopleInLine.length; i++) {
// 		switch (peopleInLine[i]) {
// 			case 25:
// 				bills[0]++;
// 				break;

// 			case 50:
// 				bills[0]--;
// 				bills[1]++;
// 				break;

// 			case 100:
// 				bills[1] ? bills[1]-- : bills[0] -= 2;
// 				bills[0]--;
// 				break;
// 		}

// 		if (bills[0] < 0) {
// 			return "NO";
// 		}
// 	}

// 	return "YES";
// }