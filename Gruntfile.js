module.exports = function(grunt){
  'use strict';

  //require('time-grunt')(grunt);

  grunt.initConfig({
    copy:{
      tests:{
        files: [
          {
            expand: true,
            cwd: 'src/js/modules/',
            src: '*.*',
            rename: function(dest, src){
              return 'tests/js/modules/src-' + src;
            }
          },
          {
            expand: true,
            cwd: 'src/js/templates/',
            src: '*.*',
            rename: function(dest, src){
              return 'tests/js/templates/src-' + src;
            }
          },
          {
            src: 'src/js/mails.json',
            dest:'tests/js/mails.json'
          },
          {
            src: 'src/css/stylesheet.css',
            dest:'tests/css/stylesheet.css'
          },
          {
            expand: true,
            cwd: 'src/images/',
            src: '**/*',
            dest:'tests/images'
          }
        ]
      },
      build: {
        files: [
          {
            src: 'src/mails.json',
            dest:'public/mails.json'
          }
        ]
      }
    },
    connect:{
      options:{
        hostname: 'localhost',
        port: 0,
        open: true,
        keepalive: true
      },
      src:{
        options:{
          base: 'src'
        }
      },
      tests:{
        options:{
          base: 'tests'
        }
      },
      public:{
        options:{
          base: 'public'
        }
      }
    },
    processhtml: {
      options:{
        commentMarker: 'processHTML'
      },
      tests:{
        files:{
          'tests/index.html':'src/index.html'
        }
      },
      build:{
        files:{
          'public/index.html':'src/index.html'
        }
      }
    },
    requirejs:{
      build:{
        options:{
          preserveLicenseComments: false,
          baseUrl: 'src/js',
          out: 'public/scripts.min.js',
          name: '../vendors/bower_components/almond/almond',
          include: 'main',
          mainConfigFile:'src/js/main.js'
        }
      }
    },
    concat:{
      build:{
        files:{
          'public/styles.css':[
            'src/vendors/bower_components/normalize.css/normalize.css',
            'src/css/stylesheet.css'
          ]
        }
      }
    },
    cssmin:{
      build:{
        files:{
          'public/styles.min.css': 'public/styles.css'
        }
      }
    },
    clean:{
      tests:{
        src: [
          'tests/js/templates',
          'tests/js/modules',
          'tests/images'
        ]
      },
      'build.styles.css':{
        src: 'public/styles.css'
      },
      'build.public-folder': {
        src: 'public/'
      }
    },
    cachebreaker:{
      build:{
        options: {
          match: ['scripts.min.js', 'styles.min.css'],
        },
        files: {
          src: ['public/index.html']
        }
      }
    },
    img: {
      'build.user-folder':{
        src:'src/images/user/*.jpg',
        dest:'public/images/user/'
      },
      'build.contacts-folder':{
        src:'src/images/contacts/*.jpg',
        dest:'public/images/contacts/'
      }
    }
  });

  /********************************************************
      Console Menu
  *********************************************************/

  grunt.loadNpmTasks('grunt-menu');
  grunt.registerTask('default', ['menu']);

  /********************************************************
      src tasks
  *********************************************************/

  grunt.registerTask('src-connect', function(){
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.task.run('connect:src');
  });

  /********************************************************
      Tests tasks
  *********************************************************/

  grunt.registerTask('tests-report', function(){
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-processhtml');

    //Delete files
    grunt.task.run('clean:tests');

    //scripts
    grunt.task.run('copy:tests');

    //index.html
    grunt.task.run('processhtml:tests');

    grunt.task.run('connect:tests');
  });

  /********************************************************
      Build tasks
  *********************************************************/

  grunt.registerTask('build', function(){
    grunt.loadNpmTasks('grunt-cache-breaker');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-img');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-processhtml');

    //Delete public folder
    grunt.task.run('clean:build.public-folder');

    //Copy and compress images
    grunt.task.run('img:build.user-folder');
    grunt.task.run('img:build.contacts-folder');

    //Copy JSON
    grunt.task.run('copy:build');

    //Create scripts.min.js
    grunt.task.run('requirejs:build');

    //Create styles.min.css
    grunt.task.run('concat:build');
    grunt.task.run('cssmin:build');
    grunt.task.run('clean:build.styles.css');

    //Create index.html
    grunt.task.run('processhtml:build');
    grunt.task.run('cachebreaker:build');
  });

  /********************************************************
      Public tasks
  *********************************************************/

  grunt.registerTask('public-connect', function(){
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.task.run('connect:public');
  });
};
