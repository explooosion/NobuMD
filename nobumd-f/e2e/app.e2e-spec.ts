import { NobumdFPage } from './app.po';

describe('nobumd-f App', () => {
  let page: NobumdFPage;

  beforeEach(() => {
    page = new NobumdFPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
