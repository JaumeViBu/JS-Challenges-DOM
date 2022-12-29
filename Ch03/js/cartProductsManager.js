/**
 * Class representing a product
 *
 * @export
 * @class Product
 */
export class Product {

  /**
   * Creates an instance of Product.
   * @param {string} name
   * @param {number} price
   * @param {string} imageUrl
   * @memberof Product
   */
  constructor(name, price, imageUrl) {
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}

/**
 * Class representing the products in 
 * the shopping cart
 *
 * @export
 * @class CartProductManager
 */
export class CartProductManager {

  /**
   *Creates an instance of CartProductManager.
   * @param {[Product]} products list of products
   * @memberof CartProductManager
   */
  constructor(products) {

    this.productsList = [];
    for (const product of products) {
      this.productsList.push({ product, quantity: 1 });
    }
  }
}