'use strict';

angular.module('demoApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {

    });
  });
