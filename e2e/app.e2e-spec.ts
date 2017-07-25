import { TripsterPage } from './app.po';

describe('tripster App', () => {
  let page: TripsterPage;

  beforeEach(() => {
    page = new TripsterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
