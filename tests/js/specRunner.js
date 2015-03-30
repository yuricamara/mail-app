require.config({
  paths: {
    //////////// APP ////////////

    //Modules
    app: 'modules/src-app',
    datesHandling: 'modules/src-datesHandling',
    featureDetection: 'modules/src-featureDetection',
    mailInfosFromJSON: 'modules/src-mailInfosFromJSON',
    mailListVisibilty: 'modules/src-mailListVisibilty',
    mailOpenedControl: 'modules/src-mailOpenedControl',
    mailCreation: 'modules/src-mailCreation',
    polyfills: 'modules/src-polyfills',

    //Templates
    openedMail: 'templates/src-opened-mail.html',
    shortMail: 'templates/src-short-mail.html',

    //Plugins
    text:'../vendors/bower_components/text/text',

    //////////// TEST ///////////

    //Libs
    chai : '/node_modules/chai/chai',
    mocha : '/node_modules/mocha/mocha',


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
