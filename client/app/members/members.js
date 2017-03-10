'use strict';

angular.module('gamersDashApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('members', {
        url: '/members/:memberId',
        templateUrl: 'app/members/members.html',
        controller: 'MembersCtrl'
      })
      .state('members.overview', {
        url: '/overview',
        templateUrl: 'app/members/overview/overview.html',

      })
      .state('members.achievements', {
        url: '/achievements',
        templateUrl: 'app/members/achievements/achievements.html',

      })
      .state('members.games', {
        url: '/games',
        templateUrl: 'app/members/games/games.html',

      })
      .state('members.stats', {
        url: '/stats',
        templateUrl: 'app/members/stats/stats.html',
        controller: 'MembersStatsCtrl'
      })

  });
