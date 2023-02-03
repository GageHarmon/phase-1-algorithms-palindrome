function isPalindrome(word) {
  let reverseWord = word.split("").reverse().join("");
  if (word === reverseWord) {
    return true;
    console.log('It is a palindrome');
  } else {
    return false;
    console.log('It is not a palindrome');
  }

}
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
