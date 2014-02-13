describe('Search Controller', function() {
  var listCtrl, $scope, contacts;

  beforeEach(function () {
    module('contactWorks.controllers');

    contacts = { contacts: [{name:'Tania', phone: '123'}]};

    inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      listCtrl = $controller('ListCtrl', {
        $scope: $scope,
        contacts: contacts
      });
    });
  });

  it('should set given contacts list into the scope', function () {
    expect($scope.contacts).toEqual([{name:'Tania', phone: '123'}]);
  });

  it('should watch the contacts list in the scope and update the groups list when a change is made', function() {
    $scope.$apply(function() {
      $scope.contacts = [{name: 'Renan'}, {name: 'Tania'}];
    });
    expect($scope.groups.R).toBeDefined();
    expect($scope.groups.T).toBeDefined();
  });
});
