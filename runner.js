require('require-self-ref');
const path = require('path');
const browser = require('./browser');
const options = require('./options');
const filenamify = require('filenamify');

before((done) => {
  console.log(`Testing site: "${options.appUrl}"...`)
  browser.setOptions(options);
  browser.setUp(done);
});

after(() => {
  browser.close();
});

beforeEach(function(){
  // Scope hack so we can access browser in `afterEach()`.
  // NOTE: this works only in `beforeEach()`, cf.:
  // - https://github.com/mochajs/mocha/issues/253
  this.browser = browser;
});

afterEach(async function() {
  // auto screenshot for failed tests.
  if (this.currentTest.state == 'failed') {
    let title = this.currentTest.fullTitle();
    let path = `${options.screenshotPath}/fail_${filenamify(title)}.png`;

    // console.log(`Saving screenshot of failed test "${title}" to "${path}"...`);
    await this.browser.lastPage.screenshot({ path: path });
  }
});
