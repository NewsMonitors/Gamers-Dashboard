'use strict';

angular.module('gamersDashApp')
  .factory('Search', function ($rootScope, $http, $q) {
    var currentUser = {};

    return {

      /**
       * get list from all by keyword
       *
       * @param  {Object}   user     - login info
       * @param  {Function} callback - optional
       * @return {Promise}
       */
      getGames: function(keyword, callback) {
        var cb = callback || angular.noop;
        var deferred = $q.defer();
        var url = '/api/search/games?keyword=' + encodeURIComponent(keyword);
        $http.get(url).
        then(function(data) {
          deferred.resolve(data);
          return cb(null, data.data);
        }).
        catch(function(err) {
          
          deferred.reject(err);
          return cb(err, null);
        }.bind(this));
        return deferred.promise;
      },

      /**
       * get game info by prdocut ID
       */
      getGameInfo: function(id, callback) {
        var cb = callback || angular.noop;
        var deferred = $q.defer();
        var url = '/api/search/gameinfo?id=' + id;
        $http.get(url).
        then(function(data) {
          deferred.resolve(data);
          return cb(null, data.data);
        }).
        catch(function(err) {
          
          deferred.reject(err);
          return cb(err, null);
        }.bind(this));
        return deferred.promise;
      },
    };
  });
