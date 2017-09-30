module.exports = {
  appUrl: `https://my-cool-app.weird-extension`,
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
