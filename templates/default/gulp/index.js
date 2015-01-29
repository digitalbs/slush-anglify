"use strict";

var fs = require('fs'),
  tasks = fs.readdirSync('./gulp/tasks/');

require('./config');

/**
 * Setting globals to use for all Gulp tasks
 */
global.gulp = require('gulp');
global.argv = require('yargs').argv;
global.browserSync = require('browser-sync');

/**
 * Gulp tasks loader. Loops through the files in the Gulp tasks directory to load in
 * @param  {Object} task Gulp task in each loop is the file that we read and bring in to require them into the Gulp file
 */
tasks.forEach(function(task) {
  if (task.match(/.*\.js/)) {
    require('./tasks/' + task);
  }
});
