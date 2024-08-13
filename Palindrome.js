//input string and make to lowercase
function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return str === str.split("").reverse().join("");
}

//check string
function testPalindrome(input) {
  if (isPalindrome(input)) {
    console.log(`"${input}" is a Palindrome.`);
  } else {
    console.log(`"${input}" is not a Palindrome.`);
  }
}

// result
testPalindrome("Mom");
testPalindrome("Ana");
testPalindrome("Hello");
testPalindrome("World");
