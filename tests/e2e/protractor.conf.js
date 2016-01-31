/* global exports */
(function(){
  'use strict';

  exports.config = {
    specs: [
      'features/*.feature'
    ],
    capabilities: {
      'browserName': 'chrome'
    },
    baseUrl: 'http://127.0.0.1:8080',

    framework: 'custom',

    frameworkPath: '../../node_modules/protractor-cucumber-framework',
    cucumberOpts: {
      require: 'features/steps/HomeSteps.js',
      format: 'pretty'
    }
  };
}());
