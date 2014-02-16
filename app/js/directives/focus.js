angular.module('contactWorks.directives').
directive('focus', [function () {
  return {
    restrict: 'A',
    link: function (scope, iElement, iAttrs) {
      iElement.focus();
    }
  };
}]);