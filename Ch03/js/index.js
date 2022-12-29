import { Product, CartProductManager } from './cartProductsManager.js';

const productsManager = new CartProductManager(
  [
    new Product(
      'Product A',
      16.49,
      './img/productA.jpg'
    ),
    new Product(
      'Product B',
      13.23,
      './img/productB.jpg'
    ),
    new Product(
      'Product C',
      33.54,
      './img/productA.jpg'
    ),

  ]
);

/**
 * Renders the given list of products
 * in the html view
 *
 * @param {[Product]} listOfProducts
 */
function renderProducts(productsList) {
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';//clear tbody
  for (const product of productsList) {

    tbody.innerHTML += `
      <tr>
        <td class="cell__thumbnail">
          <img class="data__thumbnail" src="${product.product.imageUrl}" alt="thumbnail of ${product.product.name}" />
        </td>
        <td><span class="data__name">${product.product.name}</span></td>
        <td class="cell__quantity">
          <div class="cell__quantity__container">

            <span class="data__quantity">${product.quantity}</span>
            <div class="data__quantity__buttons-container">

              <button class="data__quantity-btn data__quantity-btn--add" product='${product.product.name}'>+</button>
              <button class="data__quantity-btn data__quantity-btn--rm" product='${product.product.name}'>-</button>
            </div>
          </div>
        </td>
        <td><span class="data__price">${(product.product.price * product.quantity).toFixed(2)}</span> €</td>
      </tr>
    `;
  }
  const totalSpan = document.querySelector('#total');

  let totalSum = 0;

  for (const product of productsList) {

    totalSum += product.quantity * product.product.price;
  }

  totalSpan.innerText = totalSum.toFixed(2);
}

/**
 * Assign eventlisteners to all quantity buttons in the view
 *
 */
function assignQuantityButtonsEventListeners() {

  const addBtns = document.querySelectorAll('.data__quantity-btn--add');
  const rmBtns = document.querySelectorAll('.data__quantity-btn--rm');
  for (const btn of addBtns) {
    btn.addEventListener('click', addQuantityToProduct);
  }
  for (const btn of rmBtns) {
    btn.addEventListener('click', rmQuantityToProduct);
  }

}

/**
 * Adds 1 to the quantity of the respective btn
 *
 */
function addQuantityToProduct() {

  const productNameOfBtn = this.attributes['product'].value;
  const product = productsManager.productsList.filter(product => product.product.name == productNameOfBtn)[0];

  product.quantity += 1;
  renderProducts(productsManager.productsList);
  assignQuantityButtonsEventListeners();
}

/**
 * Substracts 1 to the quantity of the respective btn
 * Can't be negative
 *
 */
function rmQuantityToProduct() {


  const productNameOfBtn = this.attributes['product'].value;
  const product = productsManager.productsList.filter(product => product.product.name == productNameOfBtn)[0];

  product.quantity -= 1;
  product.quantity = product.quantity < 0 ? 0 : product.quantity;

  renderProducts(productsManager.productsList);
  assignQuantityButtonsEventListeners();
}



renderProducts(productsManager.productsList);
assignQuantityButtonsEventListeners();