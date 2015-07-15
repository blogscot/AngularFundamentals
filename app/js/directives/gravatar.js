'use strict';
/*globals eventsApp*/

eventsApp.directive('gravatar', function (gravatarUrlBuilder) {
  return {
    scope: {
      email: '@'
    },
    restrict: 'E',
    template: "<img>",
    replace: true,
    link: function(scope, element, attrs, controller) {
      attrs.$observe('email', function(newValue, oldValue) {
        if (newValue !== oldValue) {
          attrs.$set('src', gravatarUrlBuilder.buildGravatarUrl(newValue));
        }
      });
    }
  };
});