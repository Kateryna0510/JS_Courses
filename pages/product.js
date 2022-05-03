const { I } = inject();

module.exports = {
  womenProducts: {xpath: `//*[@id="block_top_menu"]/ul/li[1]/a`},
  topsButton:{xpath: `//a[.='Tops']`},
  tShirtsButton: {xpath: `//a[.='T-shirts']`},
  product:{xpath: `//span[.='More']`},
  price: {css: '#our_price_display'},
  addToCartButton: {xpath: `//span[.='Add to cart']`},
  proceedToCheckoutButton: {xpath: `//a[@title='Proceed to checkout']`},
  price2: {css: '#product_price_1_1_680621'},
  checkBox: {css: '#cgv'},
  paymentMethod:{xpath: `//a[.='Pay by bank wire']`},
  confirmOrderbutton: {xpath: `//span[.='I confirm my order']`},
  message: {css:'#order_step'},

waitForPageLoad() {
    I.waitForVisible(this.womenProducts);
  },
async getproductPrice () {
  return await I.grabTextFrom(this.price);
  },

async getproductPrice2 () {
    return await I.grabTextFrom(this.price2);
    },

buyProduct (){
this.waitForPageLoad();
I.click(this.womenProducts);
this.waitForPageLoad(this.topsButton);
I.click(this.topsButton);
this.waitForPageLoad(this.tShirtsButton);
I.click(this.tShirtsButton);
this.waitForPageLoad(this.product);
I.click(this.product);
this.waitForPageLoad(this.addToCartButton);
I.click(this.addToCartButton);
this.waitForPageLoad(this.proceedToCheckoutButton);
I.click(this.proceedToCheckoutButton);
this.waitForPageLoad(this.proceedToCheckoutButton);
I.click(this.proceedToCheckoutButton);
this.waitForPageLoad(this.proceedToCheckoutButton);
I.click(this.proceedToCheckoutButton);
this.waitForPageLoad(this.checkBox);
I.click(this.checkBox);
this.waitForPageLoad(this.proceedToCheckoutButton);
I.click(this.proceedToCheckoutButton);
this.waitForPageLoad(this.paymentMethod);
I.click(this.paymentMethod);
this.waitForPageLoad(this.confirmOrderbutton);
I.click(this.confirmOrderbutton);
},

async getMessage () {
  return await I.grabTextFrom(this.message);
  },

}
