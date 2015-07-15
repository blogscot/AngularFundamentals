'use strict';
/*globals eventsApp,alert*/

eventsApp.directive('greeting', function () {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template: "<div><button class='btn btn-default' ng-click='sayHello()'>Say Hello</button><div ng-transclude></div></div>",
    controller: function($scope) {
      var greetings = ['Hello'];

      $scope.sayHello = function() {
        alert(greetings.join(", "));
      };

      this.addGreeting = function(greeting) {
        greetings.push(greeting);
      };

    }
  };
})
.directive('finnish', function () {
  return {
    restrict: 'A',
    terminal: true,
    require: '^greeting', // use parent element's controller
    replace: true,
    link: function(scope, element, attrs, controller) {
      controller.addGreeting('Hei');
    }
  };
})
.directive('hindi', function () {
  return {
    restrict: 'A',
    require: '^greeting', // use parent element's controller
    replace: true,
    link: function(scope, element, attrs, controller) {
      controller.addGreeting('नमस्ते');
    }
  };
});
