'use strict';

describe('Controller: WeeklyCheckInCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellTwoApp'));

  var WeeklyCheckInCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WeeklyCheckInCtrl = $controller('WeeklyCheckInCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
