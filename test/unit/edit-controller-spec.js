describe('Edit Controller', function() {
  var editCtrl, $scope, contacts, $location, $routeParams;

  beforeEach(function () {
    module('contactWorks.controllers');

    contacts = {
      get: function() {},
      update: function() {},
      remove: function(){}
    };
    $location = { path: function() {} };
    $routeParams = { id: 1};
    spyOn(contacts, 'get').andReturn({});

    inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      editCtrl = $controller('EditCtrl', {
        $scope: $scope,
        contacts: contacts,
        $location: $location,
        $routeParams: $routeParams
      });
    });

  });

  it('should get the contact by the id on the url', function () {
    expect($scope.contactdata).toEqual({});
  });

  it('should properly delegate to contacts service when deleting', function() {
    $scope.contactdata.id = 1;
    spyOn(contacts, 'remove');

    $scope.delete();
    expect(contacts.remove).toHaveBeenCalledWith(1);
  });

  it('should change the location path when deleting', function() {
    spyOn(contacts, 'remove');
    spyOn($location, 'path');
    $scope.delete();
    expect($location.path).toHaveBeenCalledWith('/');
  });

});
