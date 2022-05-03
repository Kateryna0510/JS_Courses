Feature('Store');

Before (({I, homePage }) => {
    homePage.openStore();
    homePage.clickSignIn();
});

Scenario('create new account', async ({ I, authPage, createAccountPage, userData}) => {
    authPage.fillNewUserEmail(await I.getRandomEmail());
    console.log (await I.getRandomEmail());
    authPage.clickCreateAccount();
    createAccountPage.fillNewUserForm(userData);
    I.see('My account');
});

/*After(({I, homePage})=> {
    console.log('After is done');
    homePage.openStore();
    homePage.clickSignOut();
});

Before (({I, homePage,authPage, userData }) => {
    homePage.openStore();
    homePage.clickSignIn();
    authPage.fillExistedUserForm(user.email, user.password);
    authPage.clickSubmitSignIn();
});

Scenario('buy something', async ({ I, productPage }) => {
    productPage.buyProduct();
    console.log(await productPage.getProductPrice());
    I.assertEqual(this.price, this.price2);
    console.log(await productPage.getMessage());
    I.see('Order confirmation'); 
});

After(({I, homePage})=> {
    console.log('After is done');
    homePage.openStore();
    homePage.clickSignOut();
});*/
