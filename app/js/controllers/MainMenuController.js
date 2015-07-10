'use strict';
/*globals eventsApp*/

eventsApp.controller('MainMenuController', ['$scope', '$location', 
  function MainMenuController($scope, $location) {
  
  $scope.createEvent = function() {
    $location.url('/newEvent');
  };
}]);