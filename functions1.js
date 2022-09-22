const getBrand = (brand = "Hello") => {
  console.log(brand);
  return {
    brand: brand,
    website: `www.${brand.toLowerCase()}.com`,
  };
};

const add = (a, b) => {
  return a + b;
};

const calculate = (a, b, sign) => {
  switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    default:
    // throw error
  }
};
const brand = getBrand();
//console.log(getBrand("Nike"));
console.log(JSON.stringify(brand, null, 1));
