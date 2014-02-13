'use strict';

angular.module('contactWorks', ['ngRoute',
                               'contactWorks.controllers',
                               'contactWorks.filters',
                               'contactWorks.services',
                               'contactWorks.directives'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
    when('/', {templateUrl:'partials/add.html', controller:'AddCtrl'}).
    when('/view/:id', { templateUrl:'partials/view.html', controller:'ViewCtrl'}).
    when('/edit/:id', { templateUrl:'partials/edit.html', controller:'EditCtrl'}).
    otherwise({redirectTo:'/'});
}]);