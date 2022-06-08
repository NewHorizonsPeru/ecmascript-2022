// function Product(sku, price, name) {
//   this.sku = sku;
//   this.price = price;
//   this.name = name;
// }

// Product.prototype.getName = function () {
//   console.log(this.name);
// };

// console.log(typeof Product);

// const producto = new Product(
//   '18952377',
//   399.9,
//   'Teclado Mecánico POP Keys Heartbreaker'
// );

// producto.getName();

class Product {
  constructor(sku, price, name) {
    this.sku = sku;
    this.price = price;
    this.name = name;
  }

  getName() {
    console.log(this.price);
  }
}

console.log(typeof Product);

const producto = new Product(
  '18952377',
  399.9,
  'Teclado Mecánico POP Keys Heartbreaker'
);

producto.getName();
