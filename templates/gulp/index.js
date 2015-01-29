"use strict";

var fs = require('fs'),
  tasks = fs.readdirSync('./gulp/tasks/'),
  browserSync = require('browser-sync');

require('./config');

global.gulp = require('gulp');
global.browserSync = browserSync;

tasks.forEach(function(task) {
  if (task.match(/.*\.js/)) {
    require('./tasks/' + task);
  }
});
