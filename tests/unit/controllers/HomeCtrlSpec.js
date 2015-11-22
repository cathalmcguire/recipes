describe('Home Controller', function() {

  beforeEach(module('recipeApp'));

  var homeController,
      $scope;

  beforeEach(inject(function ($rootScope, $controller) {
    $scope = $rootScope.$new();
    homeController = $controller('HomeCtrl', {
      $scope: $scope
    });
  }));
  it('sets message to scope', function () {
    expect($scope.message).toEqual('Home');
  });

});

