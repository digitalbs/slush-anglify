module.exports = gulp.task('controller', function(done) {
  var prompts = [{
    name: 'controllerName',
    message: 'What is the name of your controller? Not currently working',
    default: 'exampleCtrl'
  }];

  //Ask
  inquirer.prompt(prompts,
    function(answers) {
      if (!answers.moveon) {
        return done();
      }
      answers.appNameSlug = _.slugify(answers.appName);
      done();
    });
});
