'use strict';

describe('Component: MypageComponent', function () {

  // load the controller's module
  beforeEach(module('testAppApp'));

  var MypageComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    MypageComponent = $componentController('MypageComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
