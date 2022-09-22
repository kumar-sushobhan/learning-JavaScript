let text = "So, today we have REALLY good day";

let ans = text
  .split("")
  .map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
  .join("");

console.log(ans);
