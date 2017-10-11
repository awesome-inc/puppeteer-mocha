const { expect } = require('chai');
const { test } = require('~/browser');

describe('Login', () => {

  // skipped, for it is only an example test
  it.skip('can login', test(async (browser, opts) => {
    const page = await browser.newPage();
    await page.goto(`${opts.appUrl}/login`);
    await page.click("[name=email]");
    await page.type("test@test.com")
    await page.click("[name=password]");
    await page.type("testing");
    await page.click("[type=submit]");

    const DASHBOARD_SELECTOR = 'div > ul > li > button > span';
    await page.waitFor(DASHBOARD_SELECTOR);

    const innerText = await page.evaluate((sel) => {
      return document.querySelector(sel).innerText;
    }, DASHBOARD_SELECTOR);
    expect(innerText).to.be.equal('Dashboard');
  }));

  // Test
  it.skip('timeout test', test(async (browser, opts) => {

    var testPromise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("Hello World!");
      }, 2000); // fails, because exceeds timeout=1000ms
    });

    var result = await testPromise;

    expect(result).to.equal("Hello World!");
  }));

});
