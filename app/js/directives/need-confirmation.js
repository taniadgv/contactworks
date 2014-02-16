/*
When there are multiple directives defined on a single DOM element,
sometimes it is necessary to specify the order in which the directives are applied.
The priority is used to sort the directives before their compile functions get called.
Priority is defined as a number. Directives with greater numerical priority are compiled first.
Pre-link functions are also run in priority order, but post-link functions are run in reverse order.
The order of directives with the same priority is undefined. The default priority is 0.
*/

angular.module('contactWorks.directives').
directive('needConfirmation', [function () {
  return {
    restrict: 'A',
    priority: -1,
    scope: true,
    compile: function(element, attrs, transclude) {
      return {
        pre: function(scope, element, attrs, controller) {

        },
        post: function(scope, element, attrs, controller) {
          element.bind('click', function(event) {
            if(!scope.confirmed) {
              element.text('Sure?');
              event.stopImmediatePropagation();
              scope.confirmed = true;
            }
          });
        }
      };
    }
  };
}]);