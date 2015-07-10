'use strict';
/*globals eventsApp*/

eventsApp.directive('votingWidget', function() {
  return {
    scope: {
      upvote: "&",    // & Method
      downvote: "&",  // @ String
      count: "="      // = Value
    },
    restrict: 'E',
    replace: true,
    templateUrl: "/templates/directives/votingWidget.html"
    };
  });



