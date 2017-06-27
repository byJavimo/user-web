'use strict';

describe('Directive: skills', function () {

  // load the directive's module
  beforeEach(module('personalWebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<skills></skills>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the skills directive');
  }));
});
