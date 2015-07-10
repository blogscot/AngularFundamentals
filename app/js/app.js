'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    
    $routeProvider.when('/',
    {
      templateUrl: '/templates/EventList.html',
      controller: 'EventListController'
    }).when('/newEvent',
    {
      templateUrl: '/templates/NewEvent.html',
      controller: 'EditEventController'
    }).when('/events',
    {
      templateUrl: '/templates/EventList.html',
      controller: 'EventListController'        
    }).when('/event/:eventId',
    {
      templateUrl: '/templates/EventDetails.html',
      controller: 'EventController'        
    }).otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);
  });
