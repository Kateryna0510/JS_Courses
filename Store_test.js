let user = {
    firstName: 'Test',
    lastName: 'Automation',
    password: 'test2022',
    dayBirth: '5',
    monthBirth: 'October',
    yearBirth: '1987',
    state: 'Alabama',
    city: 'Birmingham',
    phone: '+1111111222',
    address: '801 Tom Martin Dr.',
    postalCode: '35211',
}

Feature('Store');

Scenario('test something', ({ I, homePage, authPage, createAccountPage }) => {
    homePage.openStore();
    homePage.clickSignIn();
    authPage.fillNewUserEmail(Date.now() + '@test.com');
    authPage.clickCreateAccount();
    createAccountPage.fillNewUserForm(user);
    pause();
    I.see('My Account');
});
