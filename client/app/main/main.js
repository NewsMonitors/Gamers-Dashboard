'use strict';

angular.module('gamersDashApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        params: {searchInfo: null}
      });
  });