// Binary addition

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, 
// or after the addition.

// The binary number returned should be a string.

function addBinary(a,b) {
  var summ = a + b;

  var result = (summ).toString(2);
  return result;
}