angular.module('contactWorks.controllers').controller('EditCtrl', ['$scope', '$location', 'contacts', '$routeParams',
  function ($scope, $location, contacts, $routeParams) {

    $scope.contactdata = contacts.get($routeParams.id);

    $scope.delete = function () {
      contacts.remove($scope.contactdata.id);
      $location.path('/');
    };

  }
]);