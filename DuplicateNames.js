const arr1 = ["alice", "bob", "trudy", "jack"];
const arr2 = ["janet", "alice", "james", "jack"];

//find duplicatename
function FindDuplicateNames(arr1, arr2) {
  const duplicates = arr2.filter((list) => arr1.includes(list)); //includes is method in array => true|false
  return duplicates;
}

//result
const DuplicateNames = FindDuplicateNames(arr1, arr2);
console.log("DuplicateNames is:", DuplicateNames);
