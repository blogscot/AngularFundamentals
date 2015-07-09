'use strict';
/*global eventsApp*/

eventsApp.controller('EventController',
    function EventController($scope, eventData, $log, $routeParams) {

      $scope.sortOrder = 'name';

      eventData.getEvent($routeParams.eventId)
        .$promise.then(
          function(event) {
            $scope.event = event;
          },
          function(response) {
            $log.warn(response);
          }
        );

      $scope.upVoteSession = function(session) {
        session.upVoteCount++;
      };
      $scope.downVoteSession = function(session) {
        session.upVoteCount--;
      };
    }
);