const { I } = inject();

module.exports = {
  productLink: 'http://automationpractice.com/index.php?id_product=1&controller=product',
  price: {css: '#our_price_display'},
  addToCartButton: {css: '#add_to_cart'},
  proceedToCheckoutButton: {css: "Proceed to checkout"},
  price2: {css: '#product_price_1_1_0'},
  checkBox: {css: '#cgv'},
  paymentMethod: 'http://automationpractice.com/index.php?fc=module&amp;module=bankwire&amp;controller=payment',
  confirmOrderbutton: {css: "I confirm my order"},
  message: {css:'#order_step'},

openProduct(){
  I.amOnPage(this.productLink)
},

async getproductPrice () {
  return await I.grabTextFrom(this.price);
  },

buyProduct (){
I.click(this.addToCartButton);
I.click(this.proceedToCheckoutButton);
I.assertEqual(this.price, this.price2);
I.click(this.proceedToCheckoutButton);
I.click(this.proceedToCheckoutButton);
I.click(this.checkBox);
I.click(this.proceedToCheckoutButton);
I.amOnPage(this.paymentMethod);
I.click(this.confirmOrderbutton);
},

async getMessage () {
  return await I.grabTextFrom(this.message);
  },

}
