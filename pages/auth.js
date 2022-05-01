const { I } = inject();

module.exports = {
  newUserEmailInput: {css: '#email_create'},
  createAccountButton: {css: '#SubmitCreate'},
  pwdInput: {css: '#passwd' },
  emailInput: {css: '#email' },
  submitSignInButton: {css: '#SubmitLogin'},

  waitForPageLoad() {
    I.waitForVisible(this.newUserEmailInput);
  },
  
  waitForPageLoad2() {
    I.waitForVisible(this.emailInput);
  },

  fillNewUserEmail(email) {
    this.waitForPageLoad();
    I.fillField(this.newUserEmailInput, email);
  },

  fillExistedUserForm(user){
    I.fillField(this.pwdInput, user.password);
    I.fillField(this.emailInput, user.email);
  },

  clickSubmitSignIn(){
    I.click(this.submitSignInButton);
  },

  clickCreateAccount() {
    I.click(this.createAccountButton);
  },

  clickSignOut() {
    I.click(this.signOutButton);
  },
}
