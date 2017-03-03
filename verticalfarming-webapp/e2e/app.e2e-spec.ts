import { VerticalfarmingWebappPage } from './app.po';

describe('verticalfarming-webapp App', () => {
  let page: VerticalfarmingWebappPage;

  beforeEach(() => {
    page = new VerticalfarmingWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
