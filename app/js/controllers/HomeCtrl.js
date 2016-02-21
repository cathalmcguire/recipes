/* global angular */
(function(){
  'use strict';

  angular.module('recipeApp')
  .controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.message = 'Home';
    $scope.recipe = {
      title: 'carbonara',
      description: 'creamy goodness',
      steps: [
        'step1',
        'step2',
        'step3'
      ]
    };
    $http({
        method: 'GET',
        url: 'http://127.0.0.1:3001/testurl'
    }).then(function (response) {
      console.log('success');
    }, function errorCallback(response) {
      console.log('OH NO!');
    });
  }]);
}());
