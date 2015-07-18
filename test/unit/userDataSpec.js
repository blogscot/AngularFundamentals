'use strict';


describe('userData', function() {

  var mockUserResource;

  beforeEach(module('eventsApp'));

  beforeEach(function() {

    // fake the get method
    mockUserResource = sinon.stub({get: function() {}, save: function() {}});

    // Replace real userResource locally with mock version
    module(function($provide) {
      $provide.value('userResource', mockUserResource);
    });
  });

  describe('getUser', function() {

    it('should call getResource.get with the username', inject(function(userData) {
      userData.getUser('bob');

      // [0][0] = first call first argument
      expect(mockUserResource.get.args[0][0]).toEqual({userName: 'bob'});
    }));

    it('should return whatever userResource.get returns', inject(function(userData) {
      mockUserResource.get.returns('Iain')
      var result = userData.getUser('bob');

      expect(result).toBe('Iain');
    }));

  });

  describe('save method', function() {

    it('should call userResource.save with user argument', inject(function(userData) {
      userData.save('user11');

      // [0][0] = first call first argument
      expect(mockUserResource.save.args[0][0]).toBe('user11');
    }));
  });
})