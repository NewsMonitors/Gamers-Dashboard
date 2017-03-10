'use strict';

/**
 * Second TabBar Directive
 */
angular.module('gamersDashApp')
.directive( 'subTabBar', function () {
  return {
    restrict: 'AE',
    controller: 'GamesSubTabBarCtrl',
    controllerAs: 'ctrl',
    templateUrl: 'components/gamesSubTabBar/gamesSubTabBar.tmpl.html',
    replace: true,
    scope: {
      // title: '@'
    },
    link: function ( scope, element, attrs ) {
    }
  };

})
.controller( 'GamesSubTabBarCtrl', ['$scope', function($scope) {

}]);

