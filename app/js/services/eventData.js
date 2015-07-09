'use strict';
/*global eventsApp*/

eventsApp.factory('eventData', function ($resource) {
  var resource = $resource('/data/event/:id', {id:'@id'});
  return {
    getEvent: function(eventId) {
      return resource.get({id:eventId});
    },
    save: function(event) {
      event.id = 10;
      return resource.save(event);
    },
    getAllEvents: function(argument) {
      return resource.query();
    }
  };
});