/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./pages/home.js');
type authPage = typeof import('./pages/auth.js');
type createAccountPage = typeof import('./pages/createAccount.js');
type productPage = typeof import('./pages/product.js');
type userData = typeof import('./data/user.js');
type navigationPage = typeof import('./pages/navigation.js');
type ChaiWrapper = import('codeceptjs-chai');
type Generator_helper = import('./pages/helpers/generator_helper_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, authPage: authPage, createAccountPage: createAccountPage, productPage: productPage, userData: userData, navigation: navigationPage }
  interface Methods extends Playwright, ChaiWrapper, Generator_helper {}
  interface I extends ReturnType<steps_file>, WithTranslation<ChaiWrapper>, WithTranslation<Generator_helper> {}
  namespace Translation {
    interface Actions {}
  }
}
