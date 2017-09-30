const { test } = require('~/browser');

describe('Screenshot', () => {

  it('of google.de', test(async (browser, opts) => {
    const page = await browser.newPage();
    await page.goto('https://www.google.de');
    await page.screenshot({ path: 'google.png' });
  }));

});
