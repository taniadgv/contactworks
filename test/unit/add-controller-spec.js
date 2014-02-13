describe('Add Controller', function() {
  var addCtrl, $scope, contacts;

  beforeEach(function () {
    module('contactWorks.controllers');

    inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      contacts = { save: function() {} };
      $location = { path: function() {} };

      addCtrl = $controller('AddCtrl', {
        $scope: $scope,
        contacts: contacts,
        $location: $location
      });
    });

    spyOn(contacts, 'save').andReturn(1);;
    spyOn($location, 'path');
  });

  it('should create a contactdata property in the scope', function () {
    expect($scope.contactdata).toEqual({});
  });

  it('should properly delegate to contacts service when saving', function () {
    $scope.contactdata.name = "Tania";
    $scope.contactdata.phone = "512312321312";
    $scope.contactdata.email = "tania@thoughtworks.com";

    $scope.save();

    expect(contacts.save).toHaveBeenCalledWith({name:"Tania", phone:"512312321312", email: "tania@thoughtworks.com"});
  });

  it('should change location after saving', function () {
    $scope.save();
    expect($location.path).toHaveBeenCalledWith('/view/1');
  });

});
