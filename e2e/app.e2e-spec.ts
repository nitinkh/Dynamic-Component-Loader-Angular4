import { DynamicComponentLoaderPage } from './app.po';

describe('dynamic-component-loader App', () => {
  let page: DynamicComponentLoaderPage;

  beforeEach(() => {
    page = new DynamicComponentLoaderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
