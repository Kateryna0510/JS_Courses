const { I } = inject();

module.exports = {
  proceedToCheckoutButton: {xpath: `//a[@title='Proceed to checkout']`},
  checkBox: {css: '#cgv'},
  paymentMethod:{xpath: `//a[.='Pay by bank wire']`},
  confirmOrderbutton: {xpath: `//span[.='I confirm my order']`},
  message: {css:'#order_step'},

waitForPageLoad() {
    I.waitForVisible(this.womenProducts);
  },

buyProduct (){
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
