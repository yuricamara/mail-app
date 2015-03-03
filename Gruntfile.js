module.exports = function(grunt){
  'use strict';

  require('time-grunt')(grunt);

  grunt.initConfig({
    paths:{
      assets:'/src/assets',
      svgIcons:'/src/assets/svg-icons',
      css:'/src/css',
      sass:'/src/sass'
    }
  });
}
