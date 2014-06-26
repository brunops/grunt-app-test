module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      'public/app.js': ['/client/app.js']
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
};

