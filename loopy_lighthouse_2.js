function loopyLighthouse(range, multiples, words) {
  var num = range[0];
  var end = range[1];
  var mult1 = multiples[0];
  var mult2 = multiples[1];

  while(num <= end) {
    if (num % mult1 == 0 && num % mult2 == 0) {
      console.log(words[0] + words[1]);
    } else if(num % mult1 == 0) {
      console.log(words[0]);
    } else if (num % mult2 == 0) {
      console.log(words[1]);
    } else {
      console.log(num);
    }
    num++;
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
