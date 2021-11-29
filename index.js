function isPalindrome(word) {
  // Write your algorithm here
  /*
  Make a isPalindrome function that returns true or false.
  When input string is same forward and backwards, return true, else is false.*/

  for(let startIndex = 0; startIndex < word.length / 2; startIndex++){
    const endIndex = word.length - 1 - startIndex;
    if(word[startIndex] !== word[endIndex]) return false;
  }
  return true;
}

/* 
  Add your pseudocode here
  Iterate from beginning of string to middle of string.
    Compare letter being iterated to corresponding letter at end of string.
    If letters don't match, return false
  If reach the middle and all letters match, return true.
*/

/*
  Add written explanation of your solution here
  Code is an alternate solution to the problem.
  Solution is more optimized, fewer conditions,
  fewer lines, smaller size, and cleaner
  than the original solution.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("a"));
  console.log("=>", isPalindrome("hannah"));
  console.log("=>", isPalindrome("stanley yelnats"));
  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("ab"));
  console.log("=>", isPalindrome("stanley"));
  console.log("=>", isPalindrome("yelnats"));
}

module.exports = isPalindrome;