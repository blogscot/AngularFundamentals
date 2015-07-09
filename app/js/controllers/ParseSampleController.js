'use strict';
/*globals eventsApp*/

eventsApp.controller('ParseSampleController', 
  function ParseSampleController($scope, $parse) {

    var fn = $parse('1 + 2');
    console.log(fn());

    var getter = $parse('event.name');

    var context1 = {event: {name: 'Context 1'}};
    var context2 = {event: {name: 'Context 2'}};

    console.log(getter(context1));
    console.log(getter(context2));
    console.log(getter(context2, context1)); // context1 has prescedence

    var setter = getter.assign;
    setter(context2, "AAhh! I've been renamed!");

    console.log(context2.event.name);

  });