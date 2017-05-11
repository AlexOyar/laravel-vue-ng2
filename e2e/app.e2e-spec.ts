import { LaravelNg2Page } from './app.po';

describe('laravel-ng2 App', () => {
  let page: LaravelNg2Page;

  beforeEach(() => {
    page = new LaravelNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
