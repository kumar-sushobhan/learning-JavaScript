let checkPalindrome = (str) => {
  return str === str.split("").reverse().join("");
};
console.log("Is palindrome : " + checkPalindrome("madam"));
console.log("Is palindrome : " + checkPalindrome("sushobhan"));
