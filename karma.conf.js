// Karma configuration
// Generated on Sun Nov 22 2015 21:49:06 GMT+0000 (GMT)

module.exports = function(config) {
  config.set({
    basePath : './',
    frameworks: ['jasmine'],
    files: [
      'app/lib/angular/1.4.8/angular.min.js',
      'app/lib/angular/1.4.8/angular-mocks.js',
      'app/lib/angular/1.4.8/angular-route.min.js',
      'app/js/app.js',
      'app/js/**/*.js',
      'tests/unit/**/*.js',
      'tests/unit/*.js'
    ],
    autoWatch: true,
    browsers: ['Chrome'],
    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  })
}
