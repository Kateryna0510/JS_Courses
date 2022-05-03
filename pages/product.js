const { I } = inject();

module.exports = {
  womenProducts: {xpath: `//span[.='Women']`},
  topsButton:{xpath: `//a[.='Tops']`},
  tShirtsButton: {xpath: `//a[.='T-shirts']`},
  product:{xpath: `//a[.='Faded Short Sleeve T-shirts']`},
  price: {css: '#our_price_display'},
  addToCartButton: {xpath: `//span[.='Add to cart']`},
  proceedToCheckoutButton: {xpath: `//span[.='Proceed to checkout']`},
  price2: {css: '#product_price_1_1_680621'},
  checkBox: {css: '#cgv'},
  paymentMethod:{xpath: `//a[.='Pay by bank wire']`},
  confirmOrderbutton: {xpath: `//span[.='I confirm my order']`},
  message: {css:'#order_step'},

async getproductPrice () {
  return await I.grabTextFrom(this.price);
  },

buyProduct (){
I.click(this.womenProducts);
I.click(this.topsButton);
I.click(this.tShirtsButton);
I.click(this.product);
I.click(this.addToCartButton);
I.click(this.proceedToCheckoutButton);
I.click(this.proceedToCheckoutButton);
I.click(this.proceedToCheckoutButton);
I.click(this.checkBox);
I.click(this.proceedToCheckoutButton);
I.click(this.paymentMethod);
I.click(this.confirmOrderbutton);
},

async getMessage () {
  return await I.grabTextFrom(this.message);
  },

}
