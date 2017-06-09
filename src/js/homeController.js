'use strict';

angular.module('angularGruntSeed')

.controller('HomeController', ['$scope',
    function($scope, gridService) {
        console.log('HomeController called .................');
      $scope.test = function() {
        console.log('test');
      };
    }
]);
