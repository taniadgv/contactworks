'use strict';

angular.module('contactWorks.controllers', []);

angular.module('contactWorks.controllers').controller('AddCtrl', ['$scope', '$location', 'contacts', function ($scope, $location, contacts) {
  $scope.contactdata = {};
  $scope.save = function (contactdata) {
    var id = contacts.save({name:contactdata.name, phone:contactdata.phone, email:contactdata.email});
    $location.path('/view/' + id);
  }
}]);

angular.module('contactWorks.controllers').controller('ViewCtrl', ['$scope', 'contacts', '$routeParams', function ($scope, contacts, $routeParams) {
  $scope.contact = contacts.get($routeParams.id);
}]);

angular.module('contactWorks.controllers').controller('EditCtrl', ['$scope', '$location', 'contacts', '$routeParams', function ($scope, $location, contacts, $routeParams) {
  $scope.contactdata = contacts.get($routeParams.id);

  $scope.update = function (contactdata) {
    var id = contacts.update({id:contactdata.id, name:contactdata.name, phone:contactdata.phone, email:contactdata.email});
    $location.path('/view/' + id);
  };

  $scope.delete = function (id) {
    contacts.remove(id);
    $location.path('/');
  };

}]);

angular.module('contactWorks.controllers').controller('SearchCtrl', ['$scope', 'contacts', function ($scope, contacts) {
  $scope.contacts = contacts.contacts;
}]);

angular.module('contactWorks.controllers').controller('ListCtrl', ['$scope', 'contacts', function ($scope, contacts) {
  $scope.contacts = contacts.contacts;
}]);