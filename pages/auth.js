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

  fillExistedUserForm(user){
    I.fillField(this.emailInput, user.email);
    I.fillField(this.pwdInput, user.password);
  },

  clickSubmitSignIn(){
    I.click(this.submitSignInButton);
  },

  clickCreateAccount() {
    I.click(this.createAccountButton);
  },
}
