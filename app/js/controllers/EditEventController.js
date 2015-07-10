'use strict';
/*global eventsApp,window,alert*/

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData, $log) {

      $scope.saveEvent = function(event, newEventForm) {
        if (newEventForm.$valid) {
          eventData.save(event)
            .$promise.then(
              function(response) { console.log('success', response); },
              function(response) { console.log('failure', response); }
            );
        }
      };

      $scope.cancelEdit = function() {
        // redirect to home page
        window.location = "index.html";
      };
});