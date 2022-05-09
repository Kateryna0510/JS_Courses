const { I } = inject();

module.exports = {
  womenProducts: {xpath: `//*[@id="block_top_menu"]/ul/li[1]/a`},
  topsButton:{xpath: `//a[.='Tops']`},
  tShirtsButton: {xpath: `//a[.='T-shirts']`},
  product:{xpath: `//*[@id="center_column"]/ul/li/div/div[2]/div[2]/a[2]/span`},
  priceOnPage: {css: '#our_price_display'},
  addToCartButton: {xpath: `//span[.='Add to cart']`},
  priceInCart: {css: '#product_price_1_1_680621'},

waitForPageLoad() {
  I.waitForVisible(this.womenProducts);
},

waitForPageLoadAddToCart() {
  I.waitForVisible(this.addToCartButton);
},

waitForPageLoadTops() {
  I.waitForVisible(this.topsButton);
},

  waitForPageLoadTshirts() {
    I.waitForVisible(this.tShirtsButton);
  },

waitForPageLoadProduct() {
  I.waitForVisible(this.product);
},

goToProduct(){
  this.waitForPageLoad();
  I.click(this.womenProducts);
  this.waitForPageLoad();
  // this.waitForPageLoadTops(this.topsButton);
  I.click(this.topsButton);
  this.waitForPageLoad();
  //this.waitForPageLoadTshirts(this.tShirtsButton);
  I.click(this.tShirtsButton);
  //waitForPageLoadProduct(this.product);
  I.click(this.product);
  this.waitForPageLoadAddToCart(this.addToCartButton);
  I.click(this.addToCartButton);
},

async getproductPrice () {
  return await I.grabTextFrom(this.priceOnPage);
  },
}