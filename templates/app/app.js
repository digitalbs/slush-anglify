require('angular/angular');
require('angular-ui-router/release/angular-ui-router');
require('./app-controllers');

var routes = require('./routes');

angular.module('<%= appName %>', [
	'ui.router',
	'<%= appName %>.controllers'
	]).config(routes);

