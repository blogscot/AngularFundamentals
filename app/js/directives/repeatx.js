'use strict';
/*globals eventsApp,alert*/

eventsApp.directive('repeatX', function () {
  return {
    restrict: 'A',
    replace: true,
    compile: function(element, attrs) {
      for (var i = 0; i < Number(attrs.repeatX); i++) {
        element.after(element.clone().attr('repeat-x', 0));
      }
      return function(scope, element, attrs, controller) {
        attrs.$observe('text', function(newValue) {
          if (newValue === "Hello Iain!") {
            element.css('color', 'red');
          }
        });
      };
    }
  };
});