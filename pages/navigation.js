const { I } = inject();

module.exports = {
  womenProducts: {xpath: `//*[@id="block_top_menu"]/ul/li[1]/a`},
  topsButton:{xpath: `//a[.='Tops']`},
  tShirtsButton: {xpath: `//a[.='T-shirts']`},
  product:{xpath: `//span[.='More']`},
  priceOnPage: {css: '#our_price_display'},
  addToCartButton: {xpath: `//span[.='Add to cart']`},
  priceInCart: {css: '#product_price_1_1_680621'},

  waitForPageLoad() {
    I.waitForVisible(this.womenProducts);
  },

  waitForPageLoading() {
    I.waitForVisible(this.addToCartButton);
  },

  goToProduct(){
    this.waitForPageLoad();
    I.click(this.womenProducts);
      this.waitForPageLoad(this.topsButton);
    I.click(this.topsButton);
      this.waitForPageLoad(this.tShirtsButton);
    I.click(this.tShirtsButton);
      this.waitForPageLoad(this.product);
    I.click(this.product);
    this.waitForPageLoading();
    I.click(this.addToCartButton);
  },

async getproductPrice () {
  return await I.grabTextFrom(this.priceOnPage);
  },
}