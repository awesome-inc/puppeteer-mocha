module.exports = {
  appUrl: process.env.APP_URL || 'http://localhost:3000',
  screenshotPath: process.env.SCREENSHOTS_PATH || './screenshots',
  puppeteer: {
    // headless: false,
    args: [
      // for docker, cf.:
      '--no-sandbox',
      '--disable-setuid-sandbox',

      // debug logging
      // '--enable-logging', '--v=1'
    ]
  }
};
