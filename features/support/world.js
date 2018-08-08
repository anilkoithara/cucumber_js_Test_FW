const {setDefaultTimeout, setWorldConstructor} = require('cucumber');
const {Builder} = require('selenium-webdriver');
const fs = require('fs');

var platform = process.env.PLATFORM || "CHROME";

var buildChromeDriver = function () {
    return new Builder().forBrowser("chrome").build();
};

var buildFirefoxDriver = function () {
    return new Builder().forBrowser("firefox").build();
};

var buildDriver = function () {
    switch (platform) {
        case 'FIREFOX':
            return buildFirefoxDriver();
        default:
            return buildChromeDriver();
    }
};

var World = function World() {

    var screenshotPath = "screenShots";

    this.driver = buildDriver();

    if (!fs.existsSync(screenshotPath)) {
        fs.mkdirSync(screenshotPath);
    }

};

setDefaultTimeout(60 * 1000);
setWorldConstructor(World);