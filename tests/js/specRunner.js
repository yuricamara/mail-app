require.config({
  paths: {
    //Libs
    mocha : '/node_modules/mocha/mocha',
    chai : '/node_modules/chai/chai',

    //Modules to test
    date : 'app-scripts/date',

    //Suites
    dateModuleTests : 'test-suites/date-module-tests'
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

  var should = chai.should();

  mocha.setup('bdd');

  require(['dateModuleTests'], function(require){
    mocha.run();
  });
});
