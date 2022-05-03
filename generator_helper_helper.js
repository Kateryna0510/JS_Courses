const Helper = require('@codeceptjs/helper');

class Generator_helper extends Helper {

  getRandomEmail() {
    return Date.now() + '@test.com';
  }
}

module.exports = Generator_helper;
