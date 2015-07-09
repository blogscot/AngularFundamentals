'use strict';
/*globals eventsApp*/

eventsApp.controller('CompileSampleController', 
  function CompileSampleController($scope, $compile) {

    $scope.appendDivToElement = function(markup) {
      // $compile returns a function which is then invoked with $scope, etc.
      $compile(markup)($scope).appendTo(angular.element('#appendHere'));
      // Angular doesn't allow you to return DOM nodes:
      // "Referencing DOM nodes in Angular expressions is disallowed!"
      // So just return true instead.
      return true;
      };
  });