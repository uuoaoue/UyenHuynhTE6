function setup() {
  createCanvas(400, 400);
}
// print numbers from 1 to 100
for (var num = 1; num < 101; num++) {
  // check if the number is divisible by 3 or 5
  var divisibleByThree = num % 3;
  var divisibleByFive = num % 5;

  // if the number is divisible by both 3 and 5, then print FizzBuzz
  if (divisibleByThree == 0 && divisibleByFive == 0) console.log("FizzBuzz");
  
  // if the number is divisible by 3, then print Fizz
  else if (divisibleByThree == 0) console.log("Fizz");
  
  // if the number is divisible by 5, then print Buzz
  else if (divisibleByFive == 0) console.log("Buzz");
  
  // if non applicable, then print the number
  else console.log(num);
}
