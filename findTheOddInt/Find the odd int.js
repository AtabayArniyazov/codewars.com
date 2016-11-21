function findOdd(a) {
  a = a.sort((a, b) => a - b);
  var current = a[0], count = 1;
  
  for(var i = 1; i <= a.length; i++) {
    if(current != a[i]) {
      if(count % 2) {
       return current;
      }
      count = 0;
      current = a[i];
    }
    count++;
  }
}