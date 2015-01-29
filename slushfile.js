/*
 * slush-anglify
 * https://github.com/digitalbs/slush-anglify
 *
 * Copyright (c) 2014, Brian Schneider
 * Licensed under the MIT license.
 */

/**
 * Require in necessary modules
 */
var fs = require('fs'),
  slushTasks = fs.readdirSync(__dirname + '/slush-tasks');

/**
 * Setting globals to use for all slush tasks
 */
global.gulp = require('gulp');
global.install = require('gulp-install');
global.conflict = require('gulp-conflict');
global.global.template = require('gulp-template');
global.rename = require('gulp-rename');
global._ = require('underscore.string');
global.inquirer = require('inquirer');
global.defaults = (function() {
  var homeDir = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE,
    workingDirName = process.cwd().split('/').pop().split('\\').pop(),
    osUserName = homeDir && homeDir.split('/').pop() || 'root',
    configFile = homeDir + '/.gitconfig',
    user = {};

  if (require('fs').existsSync(configFile)) {
    user = require('iniparser').parseSync(configFile).user;
  }

  return {
    appName: workingDirName,
    userName: formatUsername(user.name) || osUserName,
    authorEmail: user.email || ''
  };
})();

/**
 * slush tasks loader. Loops through the files in the slush task directory to load in
 * @param  {Object} slushTask Slush task in each loop is the file that we read and bring in to require them into the slush file
 */
slushTasks.forEach(function(slushTask) {
  if (slushTask.match(/.*\.js/)) {
    require('./slush-tasks/' + slushTask);
  }
});

//helper methods
/**
 * Format the user name used in the github user name
 * @param  {String} string Github user name
 * @return {String} retuns the formatted user name
 */
function formatUsername(string) {
  var username = string.toLowerCase();
  return username.replace(/\s/g, '');
}
