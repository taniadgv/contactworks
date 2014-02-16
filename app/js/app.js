angular.module('contactWorks', ['ngRoute',
                               'contactWorks.controllers',
                               'contactWorks.filters',
                               'contactWorks.factories',
                               'contactWorks.directives'])

.config(['$routeProvider', function ($routeProvider) {
// This is a config block.
// You can have as many of these as you want.
// You can only inject Providers (not instances) into the config blocks.

  $routeProvider.
    when('/', {templateUrl:'partials/add.html', controller:'AddCtrl'}).
    when('/view/:id', { templateUrl:'partials/view.html', controller:'ViewCtrl'}).
    when('/edit/:id', { templateUrl:'partials/edit.html', controller:'EditCtrl'}).
    otherwise({redirectTo:'/'});

}])
.run([function () {
// Get executed after the injector is created and are used to kickstart the application.

// Only instances and constants can be injected into run blocks.
// This is to prevent further system configuration during application run time.
// This is an example of a run block.
// You can have as many of these as you want.
// You can only inject instances (not Providers) into the run blocks
}])
.constant('constantName', 1);