'use strict';

/**
 * @ngdoc function
 * @name rappiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rappiApp
 */
angular.module('rappiApp')
  .controller('MainCtrl', function ($scope,$http) {
    $scope.news= [];
    $http.get('news_mock.json').then(function successCallback(response){
      $scope.news=response.data;
      console.log(response.data);
    });
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
