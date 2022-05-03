Feature('Store');

Before (({homePage}) => {
    homePage.openStore();
    homePage.clickSignIn();
});

Scenario('create new account', async ({ I, authPage, createAccountPage, userData}) => {
    authPage.fillNewUserEmail(await I.getRandomEmail());
    console.log (await I.getRandomEmail());
    user.email = await I.getRandomEmail();
    authPage.clickCreateAccount();
    createAccountPage.fillNewUserForm(userData);
    I.see('My account');
});

After(({I, homePage})=> {
    console.log('After one is done');
    homePage.openStore();
    homePage.clickSignOut();
});

Before (({I, homePage,authPage, userData }) => {
    homePage.openStore();
    homePage.clickSignIn();
    authPage.fillExistedUserForm(user.email, userData.password);
    authPage.clickSubmitSignIn();
});

Scenario('buy something', async ({ I, productPage }) => {
    productPage.buyProduct();
    console.log(await productPage.getProductPrice());
    console.log(await productPage.getProductPrice2());
    I.assertEqual(this.price, this.price2);
    console.log(await productPage.getMessage());
    I.see('Order confirmation'); 
});

After(({I, homePage})=> {
    console.log('After two is done');
    homePage.openStore();
    homePage.clickSignOut();
});
