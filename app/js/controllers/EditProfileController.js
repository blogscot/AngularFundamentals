'use strict';
/*global eventsApp,md5Hasher*/

eventsApp.controller('EditProfileController',
    function EditProfileController($scope, md5Hasher) {
      $scope.user = {};

      $scope.getGravatarUrl = function(email) {
        var defaultGravatarUrl = "http://www.gravatar.com/avatar/000?s=200";
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(!regex.test(email))
          return defaultGravatarUrl;

        var MD5 = md5Hasher.hash;

        return 'http://www.gravatar.com/avatar/' + MD5(email) + ".jpg?s=200&r=x";
      };
});