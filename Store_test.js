Feature('Store');

/*Before (({homePage}) => {
    homePage.openStore();
});

Scenario('create new account', async ({ I, authPage, homePage, createAccountPage, userData}) => {
    homePage.clickSignIn();
    authPage.fillNewUserEmail(await I.getRandomEmail());
    userData.email = await I.getRandomEmail();
    authPage.clickCreateAccount();
    createAccountPage.fillNewUserForm(userData);
    I.see('My account');
}).tag('@reg');

Scenario('buy something', async ({ I, current, productPage, authPage, navigationPage, homePage, userData }) => {
    homePage.clickSignIn();
    I.login(current.email, current.password);
    navigationPage.goToProduct();
    I.assertEqual(this.priceOnPage, this.priceInCart);
    productPage.buyProduct();
    userData.successMessage = await productPage.getMessage();
    I.see('Order confirmation'); 
}).tag('@buy');

After(({ I, homePage }) => {
    I.logout(this.signOutButton);
    });*/

Scenario('api', async ({ I }) => {
    //https://codecept.io/helpers/REST/#rest
    //https://jsonplaceholder.typicode.com/guide/
    //Get
    let response = await I.sendGetRequest('https://jsonplaceholder.typicode.com/posts/1');
    I.seeResponseCodeIsSuccessful();
    console.log(response.data);

    //Post
    response = await I.sendPostRequest('https://jsonplaceholder.typicode.com/posts/', {
        title: 'foo',
        body: 'bar',
            userId: 1,
        })
        I.seeResponseCodeIsSuccessful();
        console.log(response.data);

    //https://swapi.dev/
    //Search at SWAPI via get
    let searchItem = 'Darth Vader';
    response = await I.sendGetRequest('https://swapi.dev/api/people/?search=' + searchItem);
    console.log(response.data);
    }).tag('@api');