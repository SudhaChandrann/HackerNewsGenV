import { browser, by, element } from 'protractor';

export class DefaultPage {
  navigateTo(): Promise<unknown> {
    return browser.get('') as Promise<unknown>;
  }

  getSpinner() {
    return element(by.tagName('app-default')).
    element(by.tagName('mat-drawer-container')).
    element(by.tagName('mat-drawer-content')).
    element(by.css('spinner'));
  }

  getWidgetCardData()
  {
    return element(by.tagName('app-default')).
    element(by.tagName('mat-drawer-container')).
    element(by.tagName('mat-drawer-content')).
    element(by.tagName('app-home')).
    element(by.tagName('app-widget-card'));
  }

  getHeader()
  {
    return element(by.tagName('app-header'));
  }

  getSideBar()
  {
    return element(by.tagName('app-header'));
  }

  getFooter()
  {
    return element(by.tagName('app-header'));
  }

  getCardElements() {
    return element.all(this.getWidgetCardData().
    element(by.tagName('mat-grid-list')).
    element(by.tagName('mat-card')));
  }

  getWidgetCard()
  {
    browser.driver.findElement(by.tagName('app-widget-card'));
  }

  getHeaderStart(): Promise<string>
  {
    return element(by.tagName('app-header .mat-toolbar .nav .a')).getText() as Promise<string>;
  }
}
