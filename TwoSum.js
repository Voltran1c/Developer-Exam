function findPairWithSum(arr, sum) {
  const Numbers = new Map();

  //loop find number
  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    const complement = sum - currentNumber;

    if (Numbers.has(complement)) {
      return [complement, currentNumber];
    }
    Numbers.set(currentNumber, i);
  }
  return null;
}

//Example
const arr = [1, 5, 13, 2, 7, 6];
const sum = 9;
const result = findPairWithSum(arr, sum);

//result
if (result) {
  console.log(`Result ${sum} from ${result[0]} + ${result[1]}`);
} else {
  console.log("Not found result to match Number");
}
