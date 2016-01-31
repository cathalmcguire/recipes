/* global module */
(function(){
  'use strict';

  module.exports = function(config) {
    config.set({
      basePath : './',
      frameworks: ['jasmine'],
      files: [
        '../../app/lib/angular/1.4.8/angular.min.js',
        '../../app/lib/angular/1.4.8/angular-mocks.js',
        '../../app/lib/angular/1.4.8/angular-route.min.js',
        '../../app/js/app.js',
        '../../app/js/**/*.js',
        './**/*.js',
        './*.js'
      ],
      autoWatch: true,
      browsers: ['PhantomJS'],
      junitReporter : {
        outputFile: 'test_out/unit.xml',
        suite: 'unit'
      }
    });
  };
}());
