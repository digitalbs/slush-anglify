module.exports = function (config) {
    config.set({
        basePath: '',

        frameworks: ['browserify', 'jasmine'],

        files: [
            './app/**/*Ctrl.js',
            './app/**/*.test.js'
        ],

        preprocessors: {
            './app/home/*.js': ['browserify'],
            './app/home/*Ctrl.js': ['coverage']
        },
        exclude: [

        ],
        reporters: ['progress'],
        coverageReporter: {
            'type': 'text',
            'dir': 'reports/coverage'
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        captureTimeout: 20000,
        singleRun: false,
        reportSlowerThan: 500,
        browserify: {
            watch: true
        }
    });
};
