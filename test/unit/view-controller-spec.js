describe('View Controller', function() {
  var viewCtrl, $scope, contacts, $routeParams;

  beforeEach(function () {
    module('contactWorks.controllers');

    $routeParams = { id: 1 };
    contacts = { get: function() {}};
    spyOn(contacts, 'get').andReturn({name:'Renan', phone:'12345678', email: 'rmartins@thoughtworks.com'});


    inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      viewCtrl = $controller('ViewCtrl', {
        $scope: $scope,
        contacts: contacts,
        $routeParams: $routeParams
      });
    });
  });

  it('should set given contact into the scope', function () {
    expect($scope.contact).toEqual({name:'Renan', phone:'12345678', email: 'rmartins@thoughtworks.com'});
    expect(contacts.get).toHaveBeenCalledWith(1);
  });

});
