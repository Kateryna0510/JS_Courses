const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium',
      waitForNavigation: 'networkidle0',
      waitForTimeout: 30000,
      timeout: 30000,
      windowSize: '1366x768',
    },

    ChaiWrapper : {
      require: "codeceptjs-chai"
    },

    REST: {
      defaultHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    },
    JSONResponse: {},

    Generator_helper: {
      require: './helpers/generator.js',
    },
  },
    FileSystem: {
    },

  include: {
    I: './steps_file.js',
    homePage: './pages/home.js',
    authPage: './pages/auth.js',
    createAccountPage: './pages/createAccount.js',
    productPage: './pages/product.js',
    userData: './data/user.js',
    navigationPage: './pages/navigation.js',
  },
  
  bootstrap: null,
  mocha: {},
  name: 'JS_Courses',
  plugins: {
    tryTo:{
      enabled: true
    }
  }
}