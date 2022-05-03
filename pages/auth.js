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

  fillNewUserEmail(email) {
    this.waitForPageLoad();
    I.fillField(this.newUserEmailInput, email);
  },

  fillExistedUserForm(userData){
    I.fillField(this.emailInput, userData.email);
    I.fillField(this.pwdInput, userData.password);
  },

  clickSubmitSignIn(){
    I.click(this.submitSignInButton);
  },

  clickCreateAccount() {
    I.click(this.createAccountButton);
  },
}
