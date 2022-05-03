const { I } = inject();

module.exports = {
  storeLink: 'http://automationpractice.com/index.php',
  signInButton: {css: 'a.login'},
  contactUsButton:  {css: '#contact-link > a'},
  signOutButton: {xpath: `//a[.='Sign out']`},
 
  openStore() {
    I.amOnPage(this.storeLink);
  },

  clickSignIn() {
    I.click(this.signInButton);
  },

  clickSignOut() {
    I.click(this.signOutButton);
  },
}