'use strict';

angular.module('rss').component('rss', {
    templateUrl: 'rss.template.html',
    controller: ['$http', '$scope', function RssController($http, $scope) {
        $http.get('http://localhost:3000/rss').then(function (res) {
            $scope.feeds = res.data;
            console.log(res.data)
        });
    }]
});