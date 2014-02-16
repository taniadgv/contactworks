'use strict';

describe('Need Confirmation Directive', function() {
  var element, directiveScope, compile;

  beforeEach(function () {
    module('contactWorks.directives');

    inject(function($rootScope, $compile) {
      directiveScope = $rootScope.$new();
      compile = $compile;
    });

    var template = "<button need-confirmation ng-click='someAction()'>Delete</button>";
    element = angular.element(template);

    directiveScope.someAction = function() { };
    spyOn(directiveScope, 'someAction');

    // Compile -> Link. The return of the compile function is the link function!
    // Scope is only avaiable in the link function.
    compile(element)(directiveScope);
    directiveScope.$digest();
  });

  it('should change the text of element to confirm and stop click event propapagation', function () {
    element.click();
    expect(element.text()).toBe('Sure?');
  });

  it('should stop click event propagation', function () {
    element.click();
    expect(directiveScope.someAction).not.toHaveBeenCalled();
  });

  it('should not stop event propagation if user is confirming', function() {
    directiveScope.$apply(function(){
      directiveScope.confirmed = true;
    });
    element.click();
    expect(directiveScope.someAction).toHaveBeenCalled();
  });

});
