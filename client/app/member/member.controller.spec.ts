'use strict';

describe('Component: MemberComponent', function () {

  // load the controller's module
  beforeEach(module('testAppApp'));

  var MemberComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    MemberComponent = $componentController('MemberComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
