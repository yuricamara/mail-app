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

};
