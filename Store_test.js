const auth = require("./pages/auth");
const home = require("./pages/home");
const product = require("./pages/product");

let user = {
    firstName: 'Test',
    lastName: 'Automation',
    password: 'test2022',
    dayBirth: '5',
    monthBirth: '10',
    yearBirth: '1987',
    state: 'Alabama',
    city: 'Birmingham',
    phone: '+1111111222',
    address: '801 Tom Martin Dr.',
    postalCode: '35211',
    email: '1651064213824@test.com',
}

Feature('Store');

Before (({I, homePage, authPage}) =>{
    homePage.openStore();
    homePage.clickSignIn();
    authPage.fillExistedUserForm();
    authPage.clickSubmitSignIn();
});

xScenario('create new account', ({ I, homePage, authPage, createAccountPage }) => {
    homePage.openStore();
    homePage.clickSignIn(); 
    authPage.fillNewUserEmail(Date.now() + '@test.com');
    authPage.clickCreateAccount();
    createAccountPage.fillNewUserForm(user);
    pause();
    I.see('My Account');
});

Scenario('buy something', async ({ I, homePage, authPage, productPage }) => {
    productPage.openProduct();
    console.log(await productPage.getProductPrice());
    productPage.buyProduct();
    console.log(await productPage.getMessage());
    pause();
    I.see('Order confirmation'); 
});

After(({I})=> {
    console.log('After is done');
    homePage.openStore();
    homePage.clickSignOut();
});
