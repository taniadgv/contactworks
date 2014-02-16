angular.module('contactWorks.controllers').controller('SearchCtrl', ['$scope', 'contacts',
  function ($scope, contacts) {
    $scope.contacts = contacts.contacts;
  }
]);