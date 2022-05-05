const { I } = inject();

module.exports = {
  storeLink: 'http://automationpractice.com/index.php',
  signInButton: {css: 'a.login'},
  contactUsButton:  {css: '#contact-link > a'},
  signOutButton: {xpath: `//a[.='Log me out']`},
 
  openStore() {
    I.amOnPage(this.storeLink);
  },

  clickSignIn() {
    I.click(this.signInButton);
  },

  clickSignOut() {
    this.waitForPageLoad();
    I.click(this.signOutButton);
  },

  waitForPageLoad() {
    I.waitForVisible(this.signOutButton);
  },
}