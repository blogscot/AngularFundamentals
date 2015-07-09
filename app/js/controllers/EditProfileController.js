'use strict';
/*global eventsApp,window,alert*/

eventsApp.controller('EditProfileController',
    function EditProfileController($scope) {
      $scope.user = {};

      $scope.getGravatarUrl = function(email) {
        var defaultUrl = "http://www.gravatar.com/avatar/000?s=200";

        return defaultUrl;
      };
});