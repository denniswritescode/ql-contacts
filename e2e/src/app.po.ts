import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-header span.page-title')).getText() as Promise<string>;
  }

  getContactTitleText(): Promise<string> {
    return element(by.css('app-contact-header h1')).getText() as Promise<string>;
  }

  hasContactsTable() {
    return element(by.css('app-contacts')).isPresent().then(present => present);
  }

  hasContactForm() {
    return this.getContactForm().isPresent().then(present => present);
  }

  getContactForm() {
    return element(by.css('app-contact-form'));
  }

  getDialog() {
    return element(by.css('.mat-dialog-container'));
  }

  fillOutFormInvalid() {
    browser.driver.findElement(by.id('company')).sendKeys('Google');
    browser.driver.findElement(by.id('firstName')).sendKeys('John');
    browser.driver.findElement(by.id('lastName')).sendKeys('Doe');
  }

  fillOutFormValid() {
    browser.driver.findElement(by.id('company')).sendKeys('Google');
    browser.driver.findElement(by.id('firstName')).sendKeys('John');
    browser.driver.findElement(by.id('lastName')).sendKeys('Doe');
    browser.driver.findElement(by.id('phone')).sendKeys('3135551212');
    browser.driver.findElement(by.id('email')).sendKeys('john@john.com');
    browser.driver.findElement(by.id('address')).sendKeys('123 Fun St');
    browser.driver.findElement(by.id('city')).sendKeys('Detroit');
    browser.driver.findElement(by.id('state')).sendKeys('Michigan');
    browser.driver.findElement(by.id('zipCode')).sendKeys('60652');
  }

  getCreateSubmitBtn() {
    return element(by.id('create-contact-submit'));
  }
}
