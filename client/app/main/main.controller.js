'use strict';

angular.module('gamersDashApp')
  .controller('MainCtrl', function($scope, $http, $state, $stateParams, Search) {
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

      alert(data.searchText);
    }

    $scope.search = function(keyword) {
      Search.getGames(keyword, function(err, result) {
        console.log('fromServer=> ', result);
        if(!err) {
          if(result.data.success) {

          } else {

          }
        } else {
          alert('There is a problem in request to the server ', err);
        }
      });
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
