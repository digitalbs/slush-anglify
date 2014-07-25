module.exports = function (config) {
    config.set({
        basePath: '',

        frameworks: ['jasmine', 'browserify'],

        files: [
            './app/**/*.js'
        ],
        preprocessors: {
            './app/**/*.js': ['browserify', 'coverage']
        },
        exclude: [],
        reporters: ['progress', 'coverage'],
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