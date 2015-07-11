'use strict';
/*global eventsApp,window,alert*/

eventsApp.controller('EditProfileController',
    function EditProfileController($scope, gravatarUrlBuilder) {
      $scope.user = {};

      $scope.getGravatarUrl = function(email) {
        gravatarUrlBuilder.buildGravatarUrl(email);
      };
});