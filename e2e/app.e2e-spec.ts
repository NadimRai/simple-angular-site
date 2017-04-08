import { SimpleAngularSitePage } from './app.po';

describe('simple-angular-site App', function() {
  let page: SimpleAngularSitePage;

  beforeEach(() => {
    page = new SimpleAngularSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
