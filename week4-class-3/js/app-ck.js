var myApp=angular.module("servicesApp",[]);myApp.controller("MainController",["$scope",function(e){e.tab="first";e.open=function(t){e.tab=t}}]);myApp.controller("SubController",["$scope","ItemService",function(e,t){var n=t.list();e.list=function(){return n};e.add=function(){t.add({id:n.length+1,label:"Item "})}}]);myApp.factory("ItemService",[function(){var e=[{id:1,label:"Item 0"},{id:2,label:"Item 1"}];return{list:function(){return e},add:function(t){e.push(t)}}}]);