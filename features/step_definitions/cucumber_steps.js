const { Given, When,Then } = require('cucumber');
const { By, until, Key } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I navigate to google search page', function (callback) {
  this.driver.get('http://www.google.co.uk/webhp?complete=0');
  callback();
});

When(/^I search Google for "([^"]*)"$/, function (searchText, callback) {
  this.driver.findElement(By.name('q')).sendKeys(searchText);
  this.driver.findElement(By.name('q')).sendKeys(Key.ENTER).then(function () {
    callback();
  });
});

Then(/^I should see cucumber link$/, function (callback) {
  this.driver.wait(until.elementLocated(By.linkText('Cucumber.io')), 3000).then(function (element) {
    element.getAttribute('href').then(function (elementText) {
      expect(elementText).to.equal('https://cucumber.io/');
      callback();
    })
  });
});