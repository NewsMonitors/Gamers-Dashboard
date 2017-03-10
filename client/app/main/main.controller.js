'use strict';

angular.module('gamersDashApp')
  .controller('MainCtrl', function($scope, $http, $state, $stateParams) {
    //scope initiailize
    $scope.awesomeThings = [];
    $scope.isSearched = false;

    //initialize the searchSection data from the nabar if possible
    if ($stateParams.searchInfo) {
      var data = $stateParams.searchInfo;
      $scope.searchText = data.searchText;
      var selectedItemIndex = data.selectedItemIndex;
      var count = 0;
      $(".dropdown-menu-filters>li").each(function() {

        if (selectedItemIndex != 0) {
          if (count != selectedItemIndex) {
            $(this).addClass("off");
            $(this).find('input').val(0);
          }
        }
        count++;
      });
      $scope.isSearched = true;
    }

    $scope.addThing = function() {
      if ($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function() {

    });




    // jquery
    $(".dropdown-menu-filters>li>a").on("click", function(e) {
      var newValue = ($(this).parent("li").hasClass("off")) ? 1 : 0;
      e.preventDefault();
      $(this).fadeOut();
      $(this).parent("li").toggleClass("off");
      $(this).fadeIn();
      $(this).next().val(newValue);
      $(this).blur();
      e.stopPropagation();
    });
  });
