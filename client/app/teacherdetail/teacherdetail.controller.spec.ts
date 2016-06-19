'use strict';

describe('Component: TeacherdetailComponent', function () {

  // load the controller's module
  beforeEach(module('polingualApp'));

  var TeacherdetailComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    TeacherdetailComponent = $componentController('TeacherdetailComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
