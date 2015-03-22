module.exports = function(grunt){
  'use strict';

  require('time-grunt')(grunt);

  grunt.initConfig({
    copy:{
      tests:{
        files: [
          {
            expand: true,
            cwd: 'src/js/',
            src: 'modules/*.js',
            dest:'tests/js/src-scripts'
          }

        ]
      },
      build: {
        files: [
          {
            expand: true,
            cwd:'src/images/',
            src: ['**/*','!**/*.db'],
            dest: 'public/images'
          }
        ]
      }
    },
    connect:{
      tests:{
        options:{
          hostname: 'localhost',
          port: 0,
          base: 'tests',
          open: true,
          keepalive: true
        }
      }
    },
    requirejs:{
      build:{
        options:{
          preserveLicenseComments: false,
          baseUrl: 'src/js',
          out: 'public/scrips.js',
          name: '../vendors/bower_components/almond/almond',
          include: 'main',
          mainConfigFile:'src/js/main.js'
        }
      }
    }
  });

  /********************************************************
      Console Menu
  *********************************************************/

  grunt.loadNpmTasks('grunt-menu');
  grunt.registerTask('default', ['menu']);

  /********************************************************
      Tasks registers and loading
  *********************************************************/

  grunt.registerTask('js-tests-report', function(){
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.task.run('copy:tests');
    grunt.task.run('connect:tests');
  });

  grunt.registerTask('build', function(){
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.task.run('requirejs:build');
    grunt.task.run('copy:build');
  });
};
