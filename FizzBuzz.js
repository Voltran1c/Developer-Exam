function FizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num.toString();
  }
}
//check num to string
//console.log(fizzBuzz(3));
//console.log(fizzBuzz(5));
//console.log(fizzBuzz(15));

//result
for (let i = 1; i <= 100; i++) {
  console.log(`${i}: ${FizzBuzz(i)}`);
}
