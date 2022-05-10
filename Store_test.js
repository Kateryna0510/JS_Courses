let accounts = new DataTable(['email', 'password']);
accounts.add(['d1651064213824@test.com', 'test2022']);
accounts.add(['1652041571065@test.com', 'test2022']);

const ReadFile = require("./helpers/read_file");

let logins = ReadFile.getContentFromFile('./data/logins.txt');
console.log(logins);
let array = ReadFile.convertStringToArray(logins);
console.log(array);
const { signOutButton } = require("./pages/home");

Feature('Store');

Before (({homePage}) => {
    homePage.openStore();
});

Scenario('create new account @reg', async ({ I, authPage, homePage, createAccountPage, userData}) => {
    homePage.clickSignIn();
    authPage.fillNewUserEmail(await I.getRandomEmail());
    console.log (await I.getRandomEmail());
    userData.email = await I.getRandomEmail();
    authPage.clickCreateAccount();
    createAccountPage.fillNewUserForm(userData);
    I.see('My account');
}).tag('@reg');

Scenario('buy something @buy', async ({ I, productPage, authPage, navigationPage, homePage, userData }) => {
    homePage.clickSignIn();
    //I.login(userData.email, userData.password);
    //authPage.fillExistedUserForm(userData);
    //authPage.clickSubmitSignIn();
    navigationPage.goToProduct();
    console.log(await navigationPage.getProductPrice(this.priceOnPage));
    console.log(await navigationPage.getProductPrice(this.priceOnPage));
    I.assertEqual(this.priceOnPage, this.priceInCart);
    productPage.buyProduct();
    console.log(await productPage.getMessage());
    I.see('Order confirmation'); 
}).tag('@buy');

Data(FileHandler.getData()).Scenario('multi login', async ({ I, current }) => {
    console.log('Email: ' + current.email + '\nPassword: ' + current.password);
}).tag('@multi');

Data(accounts).Scenario('Users from data', ({ current }) => {
    console.log('Email: ' + current.email + '\nPassword: ' + current.password);
}).tag('@account');

After(({ I, homePage }) => {
    I.logout(this.signOutButton);
});