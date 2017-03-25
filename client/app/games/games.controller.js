'use strict';

angular.module('gamersDashApp')
  .controller('GamesCtrl', function ($scope, $http, Auth, User, $stateParams, Search) {
    $('#loading').show();
    console.log('stateparams-> ',$stateParams);//$stateParams.gameId
    var gameId = $stateParams.gameId;
    Search.getGameInfo(gameId, function(err, result) {
            console.log('searchResult=> ', result);
        if(!err) {
          if(result.success) {

          } else {

          }
        } else {
          alert('There is a problem in request to the server ', err);
        }
        $('#loading').hide();
      });
  });
