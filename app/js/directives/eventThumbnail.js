'use strict';
/*globals eventsApp*/

eventsApp.directive('eventThumbnail', function() {
  return {
    scope: {
      // as the angular variable and the HTML attribute have the same name we can
      // use "=". Alternatively use "=htmlAttributeName" where html attribute
      // is "html-attribute-name"
      event: "="  
    },
    restrict: 'E',
    replace: true,
    templateUrl: "/templates/directives/eventThumbnail.html"
    };
  });



