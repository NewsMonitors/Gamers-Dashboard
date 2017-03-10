'use strict';

/**
 * Header Section Directive
 */
angular.module('gamersDashApp')
.directive( 'headerSection', function () {
  return {
    restrict: 'AE',
    controller: 'headerSectionCtrl',
    controllerAs: 'ctrl',
    templateUrl: 'components/headerSection/headerSection.tmpl.html',
    replace: true,
    scope: {
      // title: '@'
    },
    link: function ( scope, element, attrs ) {
    }
  };

})
.controller( 'headerSectionCtrl', ['$scope', function($scope) {
  console.log('asdfasdfasdf');
}]);

