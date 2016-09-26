'use strict';

angular.
module('app').
config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/rss', {
            template: '<rss></rss>'
        }).
        when('/rss1', {
            template: '<rss1></rss1>'
        }).
        otherwise('/rss');
    }
]);