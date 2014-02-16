angular.module('contactWorks.controllers').controller('AddCtrl', ['$scope', '$location', 'contacts',
  function ($scope, $location, contacts) {

    $scope.contactdata = {};

    $scope.save = function () {
      var id = contacts.save($scope.contactdata);
      $location.path('/view/' + id);
    };
  }
]);