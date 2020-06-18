import { browser, by, element, logging } from 'protractor';
import { AppPage } from './app.po';

describe('QL Contacts App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display page header', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Quicken Loans');
  });

  it('should display contact table header', () => {
    page.navigateTo();
    expect(page.getContactTitleText()).toEqual('Contact List');
  });

  it('should display contact table', () => {
    page.navigateTo();
    expect(page.hasContactsTable()).toBeTruthy();
  });

  it('should show create form', () => {
    page.navigateTo();
    element(by.css('app-contact-add button')).click();

    expect(page.hasContactForm()).toBeTruthy();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
