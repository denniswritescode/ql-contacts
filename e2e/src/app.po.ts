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
    return element(by.css('app-contact-form')).isPresent().then(present => present);
  }
}
