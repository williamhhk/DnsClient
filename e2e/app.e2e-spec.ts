import { DnsPage } from './app.po';

describe('dns App', () => {
  let page: DnsPage;

  beforeEach(() => {
    page = new DnsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
