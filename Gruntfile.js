module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      'public/app.js': ['client/app.js']
    },
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          'public/index.html': ['client/index.jade']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jade');
};

