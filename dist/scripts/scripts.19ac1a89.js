"use strict";angular.module("rappiApp",["ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ngAnimate","ng-fx"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("rappiApp").controller("MainCtrl",["$scope","$http",function(a,b){function c(a){return angular.forEach(a,function(a,b){a.status=!1}),a}a.news=[],a.newsTemp=[],a.headString="",a.maintime=!1,b.get("news_mock.json").then(function(b){a.maintime=!0,a.newsTemp=c(b.data),console.log(b.data)}),a.changeStatus=function(b){angular.forEach(a.news,function(a,c){a.id!=b.id?a.status=!1:a.status=!a.status})},a.setNews=function(){a.newsTemp.length>0&&(a.news=a.newsTemp)}}]),angular.module("rappiApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("rappiApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="col-sm-12 col-md-offset-2 col-md-8 mainpanel fx-bounce-up fx-speed-1000" ng-show="maintime"> <div class="row"> <div class="head"> <div class="col-sm-1"> <span class="glyphicon glyphicon-th-list pointer" ng-click="setNews()"> </span> </div> <div class="col-sm-11"> <div class="head-title" ng-repeat="head in news"> <div class="fx-bounce-left fx-speed-1000" ng-show="head.status"> <strong>{{head.title}}</strong> </div> </div> </div> </div> </div> <div class="row fx-zoom-left fx-speed-1000" ng-repeat="new in news"> <div class="col-sm-12 col-md-12"> <div class="panel panel-default pointer" ng-click="changeStatus(new)"> <div class="panel-body"> <div class="col-xs-6 col-sm-2 col-md-2"> <img class="img-circle img-responsive panelround" ng-src="{{new.image}}" alt=""> </div> <div class="col-xs-6 col-sm-8 col-md-10"> <div class="title"> <h3>{{new.title}}</h3> </div> </div> </div> </div> </div> <div class="col-sm-12 col-md-12 fx-bounce-down fx-speed-1000" id="{{new.id}}" ng-show="new.status"> <div class="panel panel-default panel-large"> <div class="panel-body"> <div class="col-sm-6 col-md-6"> <img class="img-responsive" ng-src="{{new.image}}"> </div> <div class="col-sm-6 col-md-6"> <h3>{{new.title}}</h3> <p> {{new.content}} </p> </div> </div> </div> </div> </div> </div>')}]);