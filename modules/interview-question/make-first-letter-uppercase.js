const word = "freecodecamp";

const firstLetter = word.charAt(0);

const firstLetterCap = firstLetter.toUpperCase();

const remainingLetters = word.slice(1);

const capitalizedWord = firstLetterCap + remainingLetters;
console.log(capitalizedWord);
