'use strict';
/*globals eventsApp*/

eventsApp.directive('mySample', function() {
  return {
    scope: {},
    restrict: 'E',
    template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br>"
    };
  });