require.config({
  paths: {
    //Libs
    mocha : '/node_modules/mocha/mocha',
    chai : '/node_modules/chai/chai',

    //Plugins
    text : 'plugins/text',

    //Templates
    shortMail: 'templates/short-mail.html',

    //Modules to test
    date : 'src-scripts/date',
    shortMailCreation : 'src-scripts/shortMailCreation',

    //Suites
    dateModuleTests : 'test-suites/date-module-tests',
    shortMailCreationModuleTests : 'test-suites/short-mail-creation-module-tests'
  },
  shim:{
    mocha :{
      exports: 'mocha'
    }
  }
});

define(function(require){
  var chai = require('chai'),
      mocha = require('mocha');

  mocha.setup('bdd');

  require(['dateModuleTests','shortMailCreationModuleTests'], function(require){
    mocha.run();
  });
});
