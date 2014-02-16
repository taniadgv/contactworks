module.exports = function(config) {
  config.set({
    files : [
      'bower_components/jquery/jquery.min.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/underscore/underscore.js',
      'app/js/controllers/controllers.js',
      'app/js/controllers/add-contact.js',
      'app/js/controllers/edit-contact.js',
      'app/js/controllers/view-contact.js',
      'app/js/controllers/list-contacts.js',
      'app/js/controllers/search-contacts.js',
      'app/js/directives/directives.js',
      'app/js/directives/focus.js',
      'app/js/directives/need-confirmation.js',
      'app/js/filters/tel.js',
      'app/js/factories/contacts.js',
      'app/js/app.js',
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
