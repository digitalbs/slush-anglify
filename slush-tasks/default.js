/**
 * Default Gulp/Slush task for Anglify.
 *
 * The default task scaffolds the basic application. At the end, it will install the node dependencies,
 * and pull third-party libraries in from bower
 *
 * @param  {Function} done The meat of the defualt task
 */
module.exports = gulp.task('default', function(done) {
  var prompts = [{
    name: 'appName',
    message: 'What is the name of your project?',
    default: defaults.appName
  }, {
    name: 'appDescription',
    message: 'What is the description?'
  }, {
    name: 'appVersion',
    message: 'What is the version of your project?',
    default: '0.1.0'
  }, {
    name: 'authorName',
    message: 'What is the author name?'
  }, {
    name: 'authorEmail',
    message: 'What is the author email?',
    default: defaults.authorEmail
  }, {
    name: 'userName',
    message: 'What is the github username?',
    default: defaults.userName
  }, {
    name: 'appGitRepo',
    message: 'What is the github repo URL',
    default: 'https://github.com/' + defaults.userName + '/' + defaults.appName
  }, {
    type: 'confirm',
    name: 'moveon',
    message: 'Continue?'
  }];
  //Ask
  inquirer.prompt(prompts,
    function(answers) {
      if (!answers.moveon) {
        return done();
      }
      answers.appNameSlug = _.slugify(answers.appName);

      gulp.src(__dirname + '/../templates/default/**')
        .pipe(template(answers))
        .pipe(rename(function(file) {
          if (file.basename[0] === '~') {
            file.basename = '.' + file.basename.slice(1);
          }
        }))
        .pipe(conflict('./'))
        .pipe(gulp.dest('./'))
        .pipe(install())
        .on('end', function() {
          done();
        });
    });
});
