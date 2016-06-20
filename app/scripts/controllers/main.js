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
    $scope.newsTemp= [];
    $scope.headString='';
    $scope.maintime = false;
    $http.get('news_mock.json').then(function successCallback(response){
      //$scope.news=response.data;
      $scope.maintime = true;
      $scope.newsTemp = setStatus(response.data);
      console.log(response.data);
    });
    function setStatus(data){
      angular.forEach(data,function(value,key){
        value.status=false;
      });
      return data;
    }
    $scope.changeStatus = function(item){
      angular.forEach($scope.news,function(value,key){
        if(value.id != item.id){
          value.status=false;
        }
        else{
          value.status = !value.status;
        }
      });

    }
    $scope.setNews= function(){
      if($scope.newsTemp.length>0){
        $scope.news =$scope.newsTemp;
      }
    }
    function setHead(){

    }
  });
