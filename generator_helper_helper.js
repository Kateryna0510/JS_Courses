const Helper = require('@codeceptjs/helper');

class Generator_helper extends Helper {

  getRandomEmail() {
    return Date.now() + '@test.com';
  }

  getRandomPassword(){
    return 'Kate' + Date.now();
  }
}

module.exports = Generator_helper;
