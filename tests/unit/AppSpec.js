describe('app.js', function() {

  beforeEach(module('recipeApp'));

  var location, 
      route, 
      rootScope;

  beforeEach(inject(
    function($location, $route, $rootScope) {
        location = $location;
        route = $route;
        rootScope = $rootScope;
  }));

  describe('Home route', function() {
    beforeEach(inject(function($httpBackend) {
      $httpBackend.expectGET('partials/home.html').respond('<div>mock template</div>');
      $httpBackend.expectGET('/').respond(200);
    }));

    it('should load the home page on successful load of /', function() {
      location.path('/');
      rootScope.$digest();
      expect(route.current.controller).toBe('HomeCtrl')
    });

    it('should redirect to the home page on load of undefined route', function() {
      location.path('/undefinedroute');
      rootScope.$digest();
      expect(route.current.controller).toBe('HomeCtrl')
    });
  });    
});
