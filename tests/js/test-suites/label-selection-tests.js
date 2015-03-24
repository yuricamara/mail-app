define(['date','chai'],function(date,chai){

  var expect = chai.expect;

  var elsShortMailList = document.getElementsByClassName('js-short-mail');

  var i = 0,
      l = 0;


  describe('Clicking on the label', function(){

    it('social for the first time, all mails except social labeled, should have the <section> element with the hidden attribute', function(){
      var label = 'social',
          elLabelSocial = document.getElementById('label-' + label);

      elLabelSocial.click();

      for(i = 0, l = elsShortMailList.length; i < l ; i++){
        var valueDataLabelAttr = elsShortMailList[i].getAttribute('data-label');

        if(valueDataLabelAttr !== (label)){
          expect(elsShortMailList[i].getAttribute('hidden').length).to.be.equal(0);
        }else{
          expect(elsShortMailList[i].getAttribute('hidden')).to.be.null;
        }
      }

    });

    it('family for the first time, all mails except social labeled, should have the <section> element with the hidden attribute', function(){
      var label = 'family',
          elLabelSocial = document.getElementById('label-' + label);

      elLabelSocial.click();

      for(i = 0, l = elsShortMailList.length; i < l ; i++){
        var valueDataLabelAttr = elsShortMailList[i].getAttribute('data-label');

        if(valueDataLabelAttr !== (label)){
          expect(elsShortMailList[i].getAttribute('hidden').length).to.be.equal(0);
        }else{
          expect(elsShortMailList[i].getAttribute('hidden')).to.be.null;
        }
      }

    });

  });

});
