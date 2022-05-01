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

/*Before (({I, homePage }) => {
    homePage.openStore();
    homePage.clickSignIn();
});*/

xScenario('create new account', ({ I, authPage, createAccountPage }) => {
    authPage.fillNewUserEmail(Date.now() + '@test.com');
    //добавить сохранение имейла чтобы использовать его во втором сценарии
    authPage.clickCreateAccount();
    createAccountPage.fillNewUserForm(user);
    I.see('My Account');
});

/*After(({I, homePage})=> {
    console.log('After is done');
    homePage.openStore();
    homePage.clickSignOut();//обьект был не найден, исправить
});*/

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

/*After(({I, homePage})=> {
    console.log('After is done');
    homePage.openStore();
    homePage.clickSignOut();
});*/
