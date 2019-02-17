const { By, until, Key} = require('selenium-webdriver');

class HomePage {
    
    constructor(driver) {
        this.driver = driver;
    }
    
    search(searchText) {
        this.driver.findElement(By.name('q')).sendKeys(searchText);
    }
}

module.exports = HomePage