var fs = require('fs'),
  currentDirectories = [],
  directoryPath = process.cwd() + '/app';

fs.readdir(directoryPath, function(err, files) {
  if(files){
    files.forEach(function(file) {
      fs.stat(directoryPath + '/' + file, function(err, stat) {
        if (stat.isDirectory()) {
          currentDirectories.push(file);
        }
      });
    });
  }
});

module.exports = gulp.task('controller', function(done) {
  inquirer.prompt({
      name: 'controllerName',
      message: 'What is the name of your controller?',
      default: 'example'
    },
    function(setupAnswer) {
      var prompts = [{
        name: 'isNewControllerDirectory',
        message: 'Will this controller live in a new directory?',
        type: 'confirm',
        default: true
      }, {
        name: 'currentControllerDirectory',
        type: 'rawlist',
        message: 'What directory would you like to place this controller?',
        choices: currentDirectories,
        when: function(props) {
          return !props.isNewControllerDirectory;
        }
      }, {
        name: 'newControllerDirectory',
        message: 'What is the name of your new directory?',
        type: 'input',
        default: setupAnswer.controllerName,
        when: function(props) {
          return props.isNewControllerDirectory;
        }
      }, {
        name: 'controllerView',
        message: 'Will this controller have a view associated with it?',
        type: 'confirm',
        default: true
      }, {
        type: 'confirm',
        name: 'moveon',
        message: 'Continue?'
      }];

      /**
       * Once all answers are answered, scaffold out new controllers
       * @param  {Array} answers Answers from user
       */
      inquirer.prompt(prompts,
        function(answers) {

          var directoryName,
            folderPath = process.cwd() + '/app',
            files = [__dirname + '/../templates/controller/*.js'],
            controllerFile = process.cwd() + '/app/app-controllers.js',
            controllerName = answers.controllerName = setupAnswer.controllerName;

          if (!answers.moveon) {
            return done();
          }

          /**
           * Set the directory name to be used in the paths
           * @param  {Boolean} answers.isNewControllerDirectory Boolean if it is a new controller direcotry
           */
          if (answers.isNewControllerDirectory) {
            directoryName = answers.newControllerDirectory;
          } else {
            directoryName = answers.currentControllerDirectory;
          }

          /**
           * answers.directoryName assign directory name to answers to be used in the controller template
           * @type {String}
           */
          answers.directoryName = directoryName;

          /**
           * folderPath Folder to push Controller templates to
           * @type {String}
           */
          folderPath = folderPath + '/' + directoryName;

          /**
           * Add view template file to the list of files if the user chooses to add a view with the controller
           * @param  {Boolean} answers.controllerView Boolean if there should be a view
           */
          if (answers.controllerView) {
            files.push(__dirname + '/../templates/controller/*.html');
          }

          /**
           * String manipulation to the app-controller file
           * This stubs out the necessary controllers to run in the controller module
           */
          fs.readFile(controllerFile, 'utf8', function(err, data) {
            var firstControllerModule = data.indexOf('var'),
              newControllerModule = "var " + controllerName + "Ctrl = require('./" + answers.directoryName + "/" + controllerName + "Ctrl');\r",
              newControllerString = "\r    .controller('" + controllerName + "Ctrl', " + controllerName + "Ctrl);";

            data = data.slice(0, firstControllerModule) + newControllerModule + data.slice(firstControllerModule, data.length);
            data = data.slice(0, data.lastIndexOf(')') + 1) + newControllerString;
            fs.writeFile(controllerFile, data, function(err) {
              if (err) {
                throw err;
              }
            });
          });

          /**
           * Once All files are ready to be scaffolded out,
           * run through the template and place in the destination folder
           */
          gulp.src(files)
            .pipe(template(answers))
            .pipe(rename(function(file) {
              file.basename = file.basename.replace('template', controllerName)
            }))
            .pipe(conflict(folderPath))
            .pipe(gulp.dest(folderPath))
            .pipe(install())
            .on('end', function() {
              done();
            });
        });
    });
});
