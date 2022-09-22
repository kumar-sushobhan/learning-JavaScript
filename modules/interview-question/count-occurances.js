const str = "sushobhan";
const charMap = new Map();
let count = 0;
for (const key of str) {
  charMap.set(key, count); // initialize every character with 0. this would make charMap to be 'h'=> 0, 'e' => 0, 'l' => 0,
}

for (const key of str) {
  let count = charMap.get(key);
  charMap.set(key, count + 1);
}
// 'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1

for (const [key, value] of charMap) {
  console.log(key, value);
}

for (const entry of charMap) {
  console.log(entry);
}
// ['h',1],['e',1],['l',2],['o',1]
