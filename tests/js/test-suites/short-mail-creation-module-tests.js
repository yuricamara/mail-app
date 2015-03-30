define(['mailCreation','chai'], function(mailCreation, chai){

  var expect = chai.expect;

  var mailList = mailCreation.createShortMails();

  describe('Short Mail Creation module', function(){
    it('should return a string.', function(){
      expect(mailList).to.be.a('string');
    });

    describe('if not receive an empty JSON', function(){
      it('shoud not return a string with or with {%= or with %}) substring.', function(){
        expect(mailList).to.not.match(/\({%=/);
        expect(mailList).to.not.match(/%}\)/);
      });
    });
  });
});
