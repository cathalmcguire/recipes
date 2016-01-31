var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;
module.exports = function() {

  this.Given(/^I navigate to the home page$/, function (callback) {
    browser.get('http://recipes.com');
    browser.wait(function() {
      return browser.driver.isElementPresent(by.css('h1'))
    }).then(function(){
      callback();
    });
  });

  this.Then(/^The home page message is displayed$/, function(callback) {
    element(by.css('h1')).getText().then(function(text){
      expect(text).to.equal('ZZZ');
      callback();
    });
  });

};
