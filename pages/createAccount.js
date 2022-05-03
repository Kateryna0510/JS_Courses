const { I } = inject();

module.exports = {
  firstNameInput: { css: '#customer_firstname' },
  lastNameInput: { css: '#customer_lastname' },
  stateSelect: { css: '#id_state' },
  postalCodeInput: { css: '#postcode' },
  passwordInput: {css: '#passwd' },
  dayBirthSelect: {css: '#days'},
  monthBirthSelect: {css: '#months'},
  yearBirthSelect:{css: '#years'},
  addressInput: {css: '#address1'},
  cityInput: {css: '#city'},
  phoneInput: {css: '#phone_mobile'},
  registerButton: {css: '#submitAccount'},

  fillNewUserForm(userData) {
    this.waitForPageLoad();
    I.fillField(this.firstNameInput, userData.firstName);
    I.fillField(this.lastNameInput, userData.lastName);
    I.click(this.stateSelect);
    I.selectOption(this.stateSelect, userData.state);
    I.fillField(this.postalCodeInput, userData.postalCode);
    I.click(this.dayBirthSelect);
    I.selectOption(this.dayBirthSelect, userData.dayBirth);
    I.click(this.monthBirthSelect);
    I.selectOption(this.monthBirthSelect, userData.monthBirth);
    I.click(this.yearBirthSelect);
    I.selectOption(this.yearBirthSelect, userData.yearBirth);
    I.fillField(this.passwordInput, userData.password);
    I.fillField(this.addressInput, userData.address);
    I.fillField(this.cityInput, userData.city);
    I.fillField(this.phoneInput, userData.phone);
    I.click(this.registerButton);
  },

  waitForPageLoad() {
    I.waitForVisible(this.firstNameInput);
  },
}