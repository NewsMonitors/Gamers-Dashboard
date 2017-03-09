'use strict';

angular.module('gamersDashApp')
    .controller('MainCtrl', function($scope, $http) {
        //scope initiailize
        $scope.awesomeThings = [];
        $scope.isSearched = false;

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

        $scope.$on('$topBarSearchResult', function(event, data) {
            // console.log('data from ndavar => ', data);
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
