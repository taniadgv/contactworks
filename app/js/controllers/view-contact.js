angular.module('contactWorks.controllers').controller('ViewCtrl', ['$scope', 'contacts', '$routeParams',
  function ($scope, contacts, $routeParams) {
    $scope.contact = contacts.get($routeParams.id);
  }
]);