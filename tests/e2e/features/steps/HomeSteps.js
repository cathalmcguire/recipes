var steps = function() {
  this.Given('I navigate to the homepage', function(callback) {
    browser.get('http://recipes.com').then(functiom() {
      callback();  
    });
  });

  this.Then('The homepage message is displayed', function(callback) {
    element(by.css('h1')).getText().then(function(text) {
      text.should.equal('aaaaa');
      callback();  
    });
  });
};
