angular.module('recipeApp')
.directive('rcRecipe', function() {
  return {
    restrict: 'A',
    templateUrl: 'partials/recipe.html',
    scope: {
      image: '=image',
      title: '=title',
      description: '@description',
      ingredients: '=ingredients',
      steps: '=steps'
    },
    link: function(scope) {
      scope.clickMe = function () {
        console.log('xxxxxxxxxxxxxxxxxx');
      };
    }
  };
});
