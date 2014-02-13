module.exports = function(config) {
  config.set({
    files : [
      'bower_components/jquery/jquery.min.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/underscore/underscore.js',
      'app/js/*.js',
      'test/unit/**/*.js'
    ],
    basePath: '../',
    frameworks: ['jasmine'],
    reporters: ['progress', 'coverage'],
    browsers: ['Chrome'],
    autoWatch: false,
    singleRun: true,
    colors: true,
    preprocessors : {
      '**/app/js/**/*.js': 'coverage',
    },
    coverageReporter : {
      type : 'html',
      dir : 'test_out/coverage'
    }
  });
};
