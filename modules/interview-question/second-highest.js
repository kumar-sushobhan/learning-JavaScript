const a = [2, 5, 3, 1, 4];
let desend = a.sort((a, b) => {
  return b - a;
});
console.log("Sorted array : " + desend);
// second highest
console.log("Second highest : " + desend[1]);
