'use strict';
/*global eventsApp*/

eventsApp.filter('durations', function() {
  return function(duration) {
    switch(duration) {
      case 1:
        return '30 mins';
      case 2:
        return '1 Hour';
      case 3:
        return 'Half Day';
      case 4:
        return 'Full Day';
      default:
        return "Unknown duration";     

    }
  };
});