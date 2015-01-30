require('angular/angular');
require('angular-ui-router/release/angular-ui-router');
require('./app-controllers');
require('./templates');

var routes = require('./routes');

angular.module('<%= appName %>', [
  'templates',
	'ui.router',
	'<%= appName %>.controllers'
	]).config(routes);

