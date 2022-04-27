const { I } = inject();

module.exports = {
  firstNameInput: { css: '#customer_firstname' },
  lastNameInput: { css: '#customer_lastname' },
  stateSelect: { css: '#id_state' },
  postalCodeInput: { css: '#postcode' },
  passwordInput: {css: '#id_passwd' },
  dayBirthSelect: {css: '#id_days'},
  monthBirthSelect: {css: '#id_months'},
  yearBirthSelect:{css: '#id_years'},
  addressInput: {css: '#id_address1'},
  cityInput: {css: '#id_city'},
  phoneInput: {css: '#id_phone_mobile'},
  registerButton: {css: '#Register'},

  fillNewUserForm(user) {
    this.waitForPageLoad();
    I.fillField(this.firstNameInput, user.firstName);
    I.fillField(this.lastNameInput, user.lastName);
    I.click(this.stateSelect);
    I.selectOption(this.stateSelect, user.state);
    I.fillField(this.postalCodeInput, user.postalCode);
    //I.click(this.dayBirthSelect);
    I.selectOption(this.dayBirthSelect, user.dayBirth);
   // I.click(this.monthBirthSelect);
    I.selectOption(this.monthBirthSelect, user.monthBirth);
   // I.click(this.yearBirthSelect);
    I.selectOption(this.yearBirthSelect, user.yearBirth);
    I.fillField(this.passwordInput, user.password);
    I.fillField(this.addressInput, user.address);
    I.fillField(this.cityInput, user.city);
    I.fillField(this.phoneInput, user.phone);
    pause();
    I.click(this.registerButton);
  },

  waitForPageLoad() {
    I.waitForVisible(this.firstNameInput);
  },
}