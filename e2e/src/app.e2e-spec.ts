import {AppPage} from './app.po';
import {$$, browser, by, element, logging} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should verify that login link routes to the Login component', () => {
    browser.get('/');
    element(by.id('btnLogin')).click();
    const loginText = element(by.id('loginTitle')).getText();
    expect(loginText).toEqual('Login');
    browser.sleep(1000);
  });

  it('should test Login and Create Auction', () => {
    browser.get('/login');
    page.getByFormControlName('username').sendKeys('monkey');
    browser.sleep(1000);
    page.getByFormControlName('password').sendKeys('1234567');
    browser.sleep(1000);
    element(by.id('btnUserlogin')).click();
    browser.sleep(1000);
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/product/auction-overview');
    browser.sleep(1000);


    $$('.example-card').then((elementsBeforeAdding) => {
      const noOfElemsBefore = elementsBeforeAdding.length;


      element(by.id('btnNewAuction')).click();
      browser.sleep(1000);
      page.getByFormControlName('name').sendKeys('Pot 3318 Lounge Chair walnut. Designer: Arne Jacobsen');
      page.getByFormControlName('location').sendKeys('Copenhagen');
      page.getByFormControlName('image').sendKeys('https://static.illumsbolighus.dk/Admin/Public/GetImage.ashx?Image=/Files/Images/XPI/af631e74-311c-429b-ec94-e9a1732641c2.jpg&Width=500&Height=500&Crop=5&Compression=90');
      page.getByFormControlName('description').sendKeys('Pot Lounge Chair in Elegance leather and frame in chromed steel.');
      page.getByFormControlName('startingPrice').sendKeys(22500);
      page.getByFormControlName('endDate').sendKeys('');
      browser.sleep(3000);
      element(by.id('btnCreateNewAuction')).click();
      browser.sleep(5000);


      $$('.example-card').then((elementsAfterAdding) => {
        expect(elementsAfterAdding.length - noOfElemsBefore).toEqual(1);
      });
    });

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
