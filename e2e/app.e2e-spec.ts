import { CloutNycPage } from './app.po';

describe('clout-nyc App', function() {
  let page: CloutNycPage;

  beforeEach(() => {
    page = new CloutNycPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
