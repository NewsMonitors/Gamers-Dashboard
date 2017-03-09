'use strict';

angular.module('gamersDashApp')
    .controller('NavbarCtrl', function($scope, $rootScope, $location, Auth) {
        $scope.menu = [{
            'title': 'Home',
            'link': '/'
        }];

        $scope.isCollapsed = true;
        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.isAdmin = Auth.isAdmin;
        $scope.getCurrentUser = Auth.getCurrentUser;

        $scope.logout = function() {
            Auth.logout();
            $location.path('/login');
        };

        $scope.isActive = function(route) {
            return route === $location.path();
        };

        //submit search form
        $scope.topBarSearch = function(searchText) {
            var searchType = $(".header-search-form button").find('.btn-value').text();
            var selectedItemIndex; 
            switch (searchType) {
                case 'Everything':
                    selectedItemIndex = 0;
                    break;
                case 'Games':
                    selectedItemIndex = 1;
                    break;
                case 'Gamertags':
                    selectedItemIndex = 2;
                    break;
                case 'Achievements':
                    selectedItemIndex = 3;
                    break;
                case 'Leaderboards':
                    selectedItemIndex = 4;
                    break;
            }
            var dataToMainCtrl = {
                'searchText': searchText,
                'selectedItemIndex': selectedItemIndex
            };
            //initialize the second search bar filter
            $(".dropdown-menu-filters>li").each(function() {
                $(this).removeClass("off");
                $(this).find('input').val(1);
            });
            $rootScope.$broadcast('$topBarSearchResult', dataToMainCtrl);
            //empty the search input value
            $scope.searchText = '';
            $('input.header-search-query').blur();
        }
        //jquery for drop down search
        $(".header-search-select>li>a").on("click", function(e) {
            e.preventDefault();
            $(this).parents(".header-search-form").find('.btn-value').text($(this).text());
            $(this).parents(".header-search-form").find('.header-search-category').val($(this).data('category'));
            $(this).parents(".header-search-form").find('input[name="group"]').val($(this).data('category'));
        });

    });
