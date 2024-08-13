function fibonacci(num) {
  if (num <= 1) return num;

  let prev = 0;
  let current = 1;
  //loop 2 to n
  for (let i = 2; i <= num; i++) {
    let next = prev + current;
    prev = current;
    current = next;
  }
  return current;
}

//example number
const NumFibonacci = 12;
const result = fibonacci(NumFibonacci);

//result
console.log(`Fibonacci Numbers ${NumFibonacci} is: ${result}`);
