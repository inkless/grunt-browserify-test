'use strict';
var path = require('path');

module.exports = function (grunt) {

  var srcPath = path.join(__dirname, 'src'),
    destPath = path.join(__dirname, 'dist');

  // initialize the configuration object
  grunt.initConfig({
    // browserify task
    browserify: {
      watch: {
        files: [{
          expand: true,
          cwd: path.join(srcPath, 'js'),
          src: '**/*.js',
          dest: path.join(destPath, 'js'),
          ext: '.min.js',
          extDot: 'first'
        }],
        options: {
          // generate sourceMap, helps debug
          browserifyOptions: {
            debug: true
          },
          watch: true,
          keepAlive: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['browserify:watch']);
};