import { DefaultPage } from './app.po';
import { browser, by, logging, element, protractor, ExpectedConditions } from 'protractor';

describe('workspace-project App', async () => {
  let page: DefaultPage;

  beforeEach(() => {
    page = new DefaultPage();
  });

  it('should display header, sidebar, footer', async () => {
    await page.navigateTo().then(function(){
      console.log("Page is fully loaded");
      });
      expect(page.getHeader()).toBeTruthy();
      expect(page.getSideBar()).toBeTruthy();
      expect(page.getFooter()).toBeTruthy();
  });

  it('should display app-widget-card once data is available', async (done) => {
    await page.navigateTo();
    let spinner = page.getSpinner();

    async function waitForTestability(timeout = 20000): Promise<boolean> {
      try {
        await browser.wait(async function () { return !await spinner.isDisplayed(); });
        return true;
      } catch (error) {
        return false;
      }
    }

    expect(await page.getWidgetCardData()).toBeTruthy();
    expect((await page.getCardElements()).length > 0).toBeTruthy();
  });

  // it('testing search', async (done) => {
  //   await page.navigateTo().then(function(){
  //     console.log("Page is fully loaded");
  //     });
  //     element(by.css('input[name="search"]')).sendKeys('amazon');
  //     expect(await element.all(by.css('mat-grid-list .mat-card')).length > 0).toBeTruthy();
  // });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
