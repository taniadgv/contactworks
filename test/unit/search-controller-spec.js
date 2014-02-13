describe('Search Controller', function() {
  var searchCtrl, $scope, contacts;

  beforeEach(function () {
    module('contactWorks.controllers');

    contacts = { contacts: [{name:'Tania', phone: '123'}]};

    inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      searchCtrl = $controller('SearchCtrl', {
        $scope: $scope,
        contacts: contacts
      });
    });
  });

  it('should set given contacts list into the scope', function () {
    expect($scope.contacts).toEqual([{name:'Tania', phone: '123'}]);
  });

});
