var { Given, When,Then } = require('cucumber');
var { By, until, Key } = require('selenium-webdriver');
var { expect } = require('chai');

Given('I navigate to google search page', function (next) {
  this.driver.get('http://www.google.co.uk/webhp?complete=0');
  next();
});

When(/^I search Google for "([^"]*)"$/, function (searchText, next) {
  this.driver.findElement(By.name('q')).sendKeys(searchText);
  this.driver.findElement(By.name('q')).sendKeys(Key.ENTER).then(function () {
    next();
  });
});

Then(/^I should see cucumber link$/, function (next) {
  this.driver.wait(until.elementLocated(By.linkText('Cucumber.io')), 3000).then(function (element) {
    element.getAttribute('href').then(function (elementText) {
      expect(elementText).to.equal('https://cucumber.io/');
      next();
    })
  });
});