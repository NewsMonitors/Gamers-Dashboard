'use strict';

angular.module('gamersDashApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('gamesAll', {
        url: '/games',
        templateUrl: 'app/games/gamesall/gamesall.html',
        controller: 'GamesAllCtrl'
      })
      .state('games', {
        url: '/games/:gameId',
        templateUrl: 'app/games/games.html',
        controller: 'GamesCtrl'
      })
      .state('games.overview', {
        url: '/overview',
        templateUrl: 'app/games/overview/overview.html',
        // controller: 'GamesOverviewCtrl'
      })
      .state('games.achievements', {
        url: '/achievements',
        templateUrl: 'app/games/achievements/achievements.html',
        // controller: 'GamesAchievementsCtrl'
      })
      .state('games.players', {
        url: '/players',
        templateUrl: 'app/games/players/players.html',
        // controller: 'GamesPlayersCtrl'
      })
      .state('games.reviews', {
        url: '/reviews',
        templateUrl: 'app/games/reviews/reviews.html',
        // controller: 'GamesReviewsCtrl'
      })
      .state('games.videos', {
        url: '/videos',
        templateUrl: 'app/games/videos/videos.html',
        // controller: 'GamesVideosCtrl'
      });
  });
