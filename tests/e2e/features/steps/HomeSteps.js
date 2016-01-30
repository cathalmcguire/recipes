module.exports = function() {

  this.Given(/^I navigate to the home page$/, function (callback) {
    browser.get('http://recipes.com').then(function() {
      callback();
    });  
  });

  this.Then('The home page message is displayed', function(callback) {
    var h1 = element(by.css('h1'));
    console.log(expect);
    (h1.getText()).should.equal('write first protractor test');
    callback();  
  });

};
