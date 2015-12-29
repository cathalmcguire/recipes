angular.module('recipeApp')
.controller('HomeCtrl', ['$scope', function ($scope) {
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
}]);
