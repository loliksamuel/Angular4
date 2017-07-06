import { Ang1Page } from './app.po';

describe('ang1 App', () => {
  let page: Ang1Page;

  beforeEach(() => {
    page = new Ang1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
