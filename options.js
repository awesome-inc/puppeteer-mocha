module.exports = {
  appUrl: process.env.APP_URL || 'http://localhost:3000',
  screenshotPath: process.env.SCREENSHOTS_PATH || './screenshots',
  puppeteer: {
    // cf.: https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions
    ignoreHTTPSErrors: true,
    // headless: false,
    // cf.: https://peter.sh/experiments/chromium-command-line-switches/
    args: [
      // for docker, cf.:
      '--no-sandbox',
      '--disable-setuid-sandbox',

      // debug logging
      // '--enable-logging', '--v=1'
    ]
  }
};
