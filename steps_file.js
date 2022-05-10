// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    login(email, password) {
      this.amOnPage('signInPage');
      this.fillField('usernameLoc', email);
      this.fillField('passLoc', password);
      this.click('signInButtonLoc');
    },

    logout() {
      this.click('signOutLoc');
    }

  });
}