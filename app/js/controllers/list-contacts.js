angular.module('contactWorks.controllers').controller('ListCtrl', ['$scope', 'contacts',
  function ($scope, contacts) {

    $scope.contacts = contacts.contacts;

    $scope.$watch('contacts', function() {
      $scope.groups = _.groupBy($scope.contacts, function(contact) {
        return contact.name.charAt(0).toUpperCase();
      });
    }, true);

  }
]);