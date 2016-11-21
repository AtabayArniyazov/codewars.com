// Task:

// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:

// You need to round the answer upto 2 decimal places and return it as String.
// If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments.
// Examples:

// SeriesSum(1) => 1 = "1"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// ---------------------------------------------------------------------------------------------------------------------------
//Моё решение!!!!!!!!!!!!!!!!!!!!!!!!!
function SeriesSum(n) {
  var upto = 0;
  if (n) {
    for (var j=0, k=1, i=0; i<n; j=1/(k+3), k=k+3, i++) {
      upto = upto + j;
    }
    upto = 1 + upto;
  }
  return upto.toFixed(2);
}

// ---------------------------------------------------------------------------------------------------------------------------
//лучшее решение!!!!!!!!!!!!!!!!!!!!!!!!!
// function SeriesSum(n) {
//   for (var s = 0, i = 0; i < n; i++) {
//     s += 1 / (1 + i * 3)
//   }
  
//   return s.toFixed(2)
// }