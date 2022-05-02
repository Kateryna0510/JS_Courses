// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    login (username, password){
      this.fillField('usernameLoc', username);
      this.fillField('passLoc', password);
      this.click('signInButtonLoc');
    }
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}