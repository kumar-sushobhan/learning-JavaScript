// Arrays destructing
const names = ["James", "Mariam", "Jamal", "Aisha", "Alex"];
console.log(...names);
const [j, marium, jamal, ...rest] = names;
console.log(j);
console.log(rest);
