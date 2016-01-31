/* global angular */
(function(){
  'use strict';

  angular.module('recipeApp', ['ngRoute'])

  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
    
    $locationProvider.html5Mode(true);

  }]);
}());
