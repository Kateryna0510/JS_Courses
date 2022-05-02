Feature('Store');

Before (({I, homePage }) => {
    homePage.openStore();
    homePage.clickSignIn();
});

Scenario('create new account', ({ I, authPage, createAccountPage, userData }) => {
    authPage.fillNewUserEmail(Date.now() + '@test.com');
    //добавить сохранение имейла чтобы использовать его во втором сценарии
    authPage.clickCreateAccount();
    createAccountPage.fillNewUserForm(user);
    I.see('My Account');
});

After(({I, homePage})=> {
    console.log('After is done');
    homePage.openStore();
    homePage.clickSignOut();//обьект был не найден, исправить
});

Before (({I, homePage,authPage }) => {
    homePage.openStore();
    homePage.clickSignIn();
    authPage.fillExistedUserForm(user.email, user.password);
    authPage.clickSubmitSignIn();
});

Scenario('buy something', async ({ I, productPage }) => {
    productPage.openProduct();
    console.log(await productPage.getProductPrice());
    productPage.buyProduct();
    I.assertEqual(this.price, this.price2);
    console.log(await productPage.getMessage());
    I.see('Order confirmation'); 
});

After(({I, homePage})=> {
    console.log('After is done');
    homePage.openStore();
    homePage.clickSignOut();
});
