@title[Introduction]
# <span style="color: #e49436">Puppeteer + Mocha</span>

#### Starter kit for automated browser testing with Puppeteer.*

---

@title[Quick start (Docker)]

```shell
docker run --rm -e APP_URL=https://mysite:8080\
 -v ./spec:/app/tests\
 -v ./screenshots:/app/screenshots\
awesomeinc/puppeteer-mocha:latest
```

@[1](The site url to test)
@[2](Your mocha* tests)
@[3](Screenshots of failed tests)
@[4](Cool docker image with puppet, mocha & chai preinstalled)
