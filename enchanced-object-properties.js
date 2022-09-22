// Enchanced object properties
const brandProperty = "BRAND";
const calculator = (brand, price) => ({
  [brandProperty.toLowerCase()]: brand,
  price,
  getDiscount() {
    return this.price - this.price * 0.3;
  },
});

const casio = calculator("casio", 10);
console.log(casio);
console.log(casio.getDiscount());
