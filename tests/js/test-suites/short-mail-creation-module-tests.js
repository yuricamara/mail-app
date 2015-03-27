define(['shortMailCreation','chai'], function(shortMailCreation, chai){

  var expect = chai.expect;

  var mailList = shortMailCreation();

  describe('Short Mail Creation module', function(){
    it('should return a string.', function(){
      expect(mailList).to.be.a('string');
    });

    describe('if not receive an empty JSON', function(){
      it('shoud not return a string with a %xxx% substring inside.', function(){
        expect(mailList).to.not.match(/\({%=/);
        expect(mailList).to.not.match(/%}\)/);
      });
    });
  });
});
