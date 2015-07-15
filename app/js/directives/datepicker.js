'use strict';
/*globals eventsApp*/

eventsApp.directive('datePicker', function () {
  return {
    restrict: 'A',
    replace: true,
    link: function(scope, element) {
      element.datepicker();
    }
  };
});