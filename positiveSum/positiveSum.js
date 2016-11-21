function positiveSum(arr) {
  var sum = 0;
  for (i=0; i < arr.length; i++) {
    if(arr[i] < 0) {
      arr[i] = 0;
    }
    sum = sum + arr[i];
  }
  return sum;
}

var example = positiveSum([15, -1, 6, -9, 23, -954,]);

console.log("Сумма положительных элементов в массиве, равна - " + example);