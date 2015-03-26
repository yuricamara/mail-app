define(['chai'],function(chai){

  var expect = chai.expect;

  var testLabel = function(label, click){
      var elLabelSocial = document.getElementById('label-' + label),
          elsShortMailList = document.getElementsByClassName('js-short-mail'),
          i = 0,
          l = 0;

      elLabelSocial.click();

    if(click === '1st click'){
      for(i = 0, l = elsShortMailList.length; i < l ; i++){
        var valueDataLabelAttr = elsShortMailList[i].getAttribute('data-label');

        if(valueDataLabelAttr !== (label)){
          expect(elsShortMailList[i].getAttribute('hidden').length).to.be.equal(0);
        }else{
          expect(elsShortMailList[i].getAttribute('hidden')).to.be.null;
        }
      }
    }

    if(click === '2nd click'){
      for(i = 0, l = elsShortMailList.length; i < l ; i++){
        var valueDataLabelAttr = elsShortMailList[i].getAttribute('data-label');

        expect(elsShortMailList[i].getAttribute('hidden')).to.be.null;

      }
    }
  };


  describe('Clicking on the label', function(){
    var labelToTest = [
      'social',
      'family',
      'friends',
      'clients'
    ];

    //social
    it(labelToTest[0] + ' for the first time all mails except '+ labelToTest[0] + ' labeled, should have the <section> element with the hidden attribute.', function(){
      testLabel(labelToTest[0],'1st click');
    });

    it(labelToTest[0] + ' for the second time all mails should not have the <section> element with the hidden attribute.', function(){
      testLabel(labelToTest[0],'2nd click');
    });


    //family
    it(labelToTest[1] + ' for the first time all mails except '+ labelToTest[1] + ' labeled, should have the <section> element with the hidden attribute.', function(){
      testLabel(labelToTest[1]);
    });
    it(labelToTest[1] + ' for the second time all mails should not have the <section> element with the hidden attribute.', function(){
      testLabel(labelToTest[1],'2nd click');
    });


    //friends
    it(labelToTest[2] + ' for the first time all mails except '+ labelToTest[2] + ' labeled, should have the <section> element with the hidden attribute.', function(){
      testLabel(labelToTest[2]);
    });
    it(labelToTest[2] + ' for the second time all mails should not have the <section> element with the hidden attribute.', function(){
      testLabel(labelToTest[2],'2nd click');
    });

    //clients
    it(labelToTest[3] + ' for the first time all mails except '+ labelToTest[3] + ' labeled, should have the <section> element with the hidden attribute.', function(){
      testLabel(labelToTest[3]);
    });
    it(labelToTest[3] + ' for the second time all mails should not have the <section> element with the hidden attribute.', function(){
      testLabel(labelToTest[3],'2nd click');
    });

  });

});
