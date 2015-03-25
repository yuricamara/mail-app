require.config({
  paths: {
    //Libs
    chai : '/node_modules/chai/chai',
    mocha : '/node_modules/mocha/mocha',

    //Plugins
    text:'../vendors/bower_components/text/text',

    //Templates
    shortMail: 'templates/src-short-mail.html',

    //Modules to test
    app: 'modules/src-app',
    date : 'modules/src-date',
    mailListVisibilty: 'modules/src-mailListVisibilty',
    shortMailCreation : 'modules/src-shortMailCreation',

    //Suites
    dateModuleTests : 'test-suites/date-module-tests',
    labelSelectionTests: 'test-suites/label-selection-tests',
    shortMailCreationModuleTests : 'test-suites/short-mail-creation-module-tests'
  },
  shim:{
    mocha :{
      exports: 'mocha'
    }
  }
});


require(['app'],function(app){
  'use strict';

  app();
});

define(function(require){
  'use strict';

  var chai = require('chai'),
      mocha = require('mocha');

  mocha.setup('bdd');

  require(['dateModuleTests','shortMailCreationModuleTests','labelSelectionTests'], function(require){
    mocha.run();
  });
});
