'use strict';
/*globals eventsApp,setTimeout*/

eventsApp.controller('TimeoutSampleController', 
  function TimeoutSampleController($scope, $timeout) {
    var promise, Angular = true;

    if (Angular) {
      promise = $timeout(function() {
        $scope.name = "Elvis Presley";
      }, 3000);
    }  else {
    // JavaScript timers run outside the Angular World. So Angular
    // has no idea when they expire. Updating the model, see HTML input box, 
    // forces Angular to check.
    promise = setTimeout(function() {
      $scope.name = "Elvis Presley";
    }, 3000);
      $scope.cancel = function() {
        $timeout.cancel(promise);
      };
    }
  });