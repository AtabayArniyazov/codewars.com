// How long will it take the train to reach its final destination?	
// Example:
// reachDestination(80, 20);
// function should return: 'The train will be there in 4 hours.'

//Моё решение!!!

function reachDestination(distance, speed) {
	var hoursOrhour = " hours.";
	var finalDest = distance / speed;

	if (finalDest <= 0.5) {
		finalDest = 0.5;
	} else if (finalDest < Math.floor(finalDest) + 0.75 && finalDest > Math.floor(finalDest) + 0.24) {
		finalDest = Math.floor(finalDest) + 0.5;
	} else if (finalDest > Math.floor(finalDest) + 0.74 || finalDest < Math.floor(finalDest) + 0.25) {
		finalDest = Math.round(finalDest);

		if (finalDest === 1) {
			hoursOrhour = " hour.";
		}
	}

	return "The train will be there in " + finalDest + hoursOrhour;
}

// !!! лучшее решение !!!
// function reachDestination(distance, speed) {
//   const duration = Math.round(distance / speed * 2) / 2;
//   return `The train will be there in ${duration} hour${duration === 1 ? '' : 's'}.`;
// }