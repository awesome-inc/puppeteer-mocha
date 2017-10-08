[![GitPitch](https://gitpitch.com/assets/badge.svg)](https://gitpitch.com/awesome-inc/puppeteer-mocha/master)

# puppeteer-mocha

[![dockeri.co](http://dockeri.co/image/awesomeinc/puppeteer-mocha)](https://hub.docker.com/r/awesomeinc/puppeteer-mocha/)

[![Build status](https://travis-ci.org/awesome-inc/puppeteer-mocha.svg?branch=master)](https://travis-ci.org/awesome-inc/puppeteer-mocha/)
[![GitHub issues](https://img.shields.io/github/issues/awesome-inc/puppeteer-mocha.svg "GitHub issues")](https://github.com/awesome-inc/puppeteer-mocha)
[![GitHub stars](https://img.shields.io/github/stars/awesome-inc/puppeteer-mocha "GitHub stars")](https://github.com/awesome-inc/puppeteer-mocha)

Starter kit for automated browser testing of external sites using [puppeteer](https://github.com/GoogleChrome/puppeteer) and [Mocha](https://mochajs.org/).

## Usage

Add your tests, install dependencies and run tests

```bash
yarn install
npm test
```

Docker example for your site `https://mysite:8080`, mounting tests `./spec` and screenshot directory

```bash
docker run --rm -e APP_URL=https://mysite:8080\
 -v ./spec:/app/tests\
 -v ./screenshots:/app/screenshots\
awesomeinc/puppeteer-mocha:latest
```

Or the same with `docker-compose`

```bash
docker-compose run --rm test
```

## References

- [Using that Headless Chrome You’ve Been Hearing About](https://medium.com/@ivanmontiel/using-that-headless-chrome-youve-been-hearing-about-543a8cc07af5)
- [alekzonder/docker-puppeteer](https://github.com/alekzonder/docker-puppeteer)

## Related projects

- [charlieduong94/mocha-puppeteer](https://github.com/charlieduong94/mocha-puppeteer):
  Much more advanced than this repo. Seems to be directed towards self-testing node/exprees sites with lasso and markojs. If this suits you we definitely recommend `mocha-puppeteer`. However, we wanted to simply express browser tests using mocha for any external site (e.g. a rails app). Since we could not find an option to test external sites or to test other apps than express/markojs-based, we rolled our own.
