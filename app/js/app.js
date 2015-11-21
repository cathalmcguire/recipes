'use strict';
angular.module('recipeApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
