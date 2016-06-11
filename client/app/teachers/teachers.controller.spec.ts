'use strict';

describe('Component: TeachersComponent', function () {

  // load the controller's module
  beforeEach(module('testAppApp'));

  var TeachersComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    TeachersComponent = $componentController('TeachersComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
