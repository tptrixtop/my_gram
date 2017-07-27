import { Webogram2Page } from './app.po';

describe('webogram2 App', () => {
  let page: Webogram2Page;

  beforeEach(() => {
    page = new Webogram2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
