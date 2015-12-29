angular.module('recipeApp')
.directive('rcRecipe', function() {
  return {
    restrict: 'A',
    templateUrl: 'partials/recipe.html'
    //scope: {
      //title: '=title',
      //image: '=image',
      //description: '=description',
      //ingredients: '=ingredients',
      //steps: 'steps'
    //},
    //link: function() {
      //console.log('xxxxxxxxxxxxxxxxxxx');
    //}
  };
});
