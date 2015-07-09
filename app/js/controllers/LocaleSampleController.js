'use strict';
/*globals eventsApp,console*/

eventsApp.controller('LocaleSampleController', 
  function LocaleSampleController($scope, $locale) {

    console.log($locale);

    $scope.myDate = Date.now();
    $scope.MyFormat = $locale.DATETIME_FORMATS.shortDate;

    // throw { message: 'error message'};

  });