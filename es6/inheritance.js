// function Family(familyCode, familyName) {
//   this.familyCode = familyCode;
//   this.familyName = familyName;
// }

// Family.prototype.getFamilyName = function () {
//   console.log(this.familyName);
// };

// function Product(
//   productSku,
//   productPrice,
//   productName,
//   familyCode,
//   familyName
// ) {
//   Family.call(this, familyCode, familyName);
//   this.productSku = productSku;
//   this.productPrice = productPrice;
//   this.productName = productName;
// }

// Product.prototype = Object.create(Family.prototype);

// Product.prototype.getProductName = function () {
//   console.log(this.productName);
// };

// const producto = new Product(
//   '18952377',
//   399.9,
//   'Teclado Mecánico POP Keys Heartbreaker',
//   '14X53OP',
//   'Tecnologia'
// );

// producto.getFamilyName();
// producto.getProductName();

/** SUGAR SYNTAX **/
class Family {
  constructor(familyCode, familyName) {
    this.familyCode = familyCode;
    this.familyName = familyName;
  }
  getFamilyName() {
    console.log(this.familyName);
  }
}

class Product extends Family {
  constructor(productSku, productPrice, productName, familyCode, familyName) {
    super(familyCode, familyName);
    this.productSku = productSku;
    this.productPrice = productPrice;
    this.productName = productName;
  }

  getProductName() {
    console.log(this.productName);
  }
}

const producto = new Product(
  '18952377',
  399.9,
  'Teclado Mecánico POP Keys Heartbreaker',
  '14X53OP',
  'Tecnologia'
);

producto.getProductName();
producto.getFamilyName();
