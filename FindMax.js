function FindMax(arr) {
  return {
    max: Math.max(...arr), //spread array
  };
}

//result
console.log(FindMax([6, 1, -50, 200, 7, 9, -13, 20]));
