describe('Focus Directive', function() {
  var directiveScope, compile;

  beforeEach(function () {
    module('contactWorks.directives');

    inject(function($rootScope, $compile) {
      directiveScope = $rootScope.$new();
      compile = $compile;
    });
  });

  it('should focus on the element', function () {
    var element = angular.element("<input focus type='text' />");
    compile(element)(directiveScope);


  });

  // it('should require element to be an input', function () {
  //   var element = angular.element("<button focus></button>");
  //   function errorFunctionWrapper(){
  //     compile(element)(directiveScope);
  //   }
  //   expect(errorFunctionWrapper).toThrow();
  // });

});
