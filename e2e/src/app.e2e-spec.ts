import { browser, by, element, logging } from 'protractor';
import { protractor } from 'protractor/built/ptor';
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

  it('should prevent submission of the form if not filled out', () => {
    page.navigateTo();

    element(by.css('app-contact-add button')).click();
    page.fillOutFormInvalid();

    expect(page.getCreateSubmitBtn().isEnabled()).toBeFalsy();
  });

  it('should allow submission of the form if filled out correctly', () => {
    page.navigateTo();

    element(by.css('app-contact-add button')).click();
    expect(page.getCreateSubmitBtn().isEnabled()).toBeFalsy();
    page.fillOutFormValid();
    expect(page.getCreateSubmitBtn().isEnabled()).toBeTruthy();
  });

  it('should close dialog after submission of form', () => {
    const EC = protractor.ExpectedConditions;
    page.navigateTo();

    element(by.css('app-contact-add button')).click();
    page.fillOutFormValid();
    page.getCreateSubmitBtn().click();
    // form should disappear immediately..
    expect(page.getContactForm().isPresent()).toBeFalsy();
    // dialog should disappear in 3 seconds..
    browser.wait(EC.not(EC.presenceOf(page.getDialog())), 3100);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
