let firstWord = "Deepak";
let secondWord = "Aman";

function isAnagram(wordOne, wordTwo) {
  // change both words to lowercase
  let a = wordOne.toLowerCase();
  let b = wordTwo.toUpperCase();

  // Sort the strings, then combine the array to a string
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}

console.log(isAnagram(firstWord, secondWord));
