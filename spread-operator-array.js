// Arrays spread operator

const a = [1, 2, 3];
const b = [4, 5];

const numbers = [...a, ...b];
console.log(numbers);

const add = (n1, n2) => {
  return n1 + n2;
};
console.log(add(...b));
console.log(add(...a));
