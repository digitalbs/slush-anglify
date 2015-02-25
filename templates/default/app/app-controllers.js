require('angular/angular');

var homeCtrl = require('./home/homeCtrl');

angular.module('<%= appName %>.controllers', [])
	.controller('HomeCtrl', homeCtrl);
