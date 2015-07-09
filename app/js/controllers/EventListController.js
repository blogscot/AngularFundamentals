'use strict';
/*globals eventsApp*/

eventsApp.controller('EventListController', 
  function EventListController($scope, $location, eventData) {
    $scope.events = eventData.getAllEvents();

    console.log($scope.events);
  });