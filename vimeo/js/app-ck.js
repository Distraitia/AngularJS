var vimeoApp=angular.module("vimeoApp",[]);vimeoApp.directive("vimeoPlayer",[function(){var e={_template:function(e,t,n){return"<iframe src='//player.vimeo.com/video/"+e+" ' frameborder='0' width='"+t+"' height='"+n+"' allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>"},initialize:function(e){var t=640,n=320;return this._template(e,t,n)}};return function(t,n,r){var i=e.initialize(109169719);n.empty().append(i)}}]);vimeoApp.controller("PlaylistController",["$scope","$http","$sce",function(e,t,n){e.getData=function(){var n="http://vimeo.com/api/v2/channel/staffpicks/videos.json",r=t.get(n);r.then(function(t){e.playlistData=t.data});r.catch(function(e){console.error(e)})};e.safeHtml=function(e){return n.trustAsHtml(e)};e.changeVideo=function(e){console.log(e)};e.getData()}]);