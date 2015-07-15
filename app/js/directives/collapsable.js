'use strict';
/*globals eventsApp*/

eventsApp.directive('collapsable', function () {
  return {
    scope: {
      title: '@'
    },
    restrict: 'E',
    replace: true,
    transclude: true,
    template: '<div><h3 ng-click="toggleVisibility()">{{title}}</h3><div ng-show="visible" ng-transclude></div></div>',
    controller: function($scope) {
      $scope.visible = true;

      $scope.toggleVisibility = function() {
        $scope.visible = !$scope.visible;
      };
    }
  };
});