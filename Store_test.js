Feature('Store');

Before (({homePage}) => {
    homePage.openStore();
});

/*Scenario('create new account', async ({ I, authPage, homePage, createAccountPage, userData}) => {
    homePage.clickSignIn();
    authPage.fillNewUserEmail(await I.getRandomEmail());
    console.log (await I.getRandomEmail());
    userData.email = await I.getRandomEmail();
    authPage.clickCreateAccount();
    createAccountPage.fillNewUserForm(userData);
    I.see('My account');
});*/

Scenario('buy something', async ({ I, productPage, authPage, navigationPage, homePage, userData }) => {
    homePage.clickSignIn();
    authPage.fillExistedUserForm(userData);
    authPage.clickSubmitSignIn();
    navigationPage.goToProduct();
    console.log(await navigationPage.getProductPrice(this.priceOnPage));
    console.log(await navigationPage.getProductPrice(this.priceOnPage));
    I.assertEqual(this.priceOnPage, this.priceInCart);
    productPage.buyProduct();
    console.log(await productPage.getMessage());
    I.see('Order confirmation'); 
});

/*After(({homePage})=> {
    homePage.clickSignOut();
});*/