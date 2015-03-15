define(['date','chai'],function(date,chai){

  var expect = chai.expect;

  describe('Date module', function(){

    it('should return an object if it´s passed for it a date in dd/mm format.', function(){

      var formattedDate = date('11/10/2014');

      expect(formattedDate).to.be.an('object');

    });

    it('sould return an empty object if it is passed for it an empty string.', function(){

      var unformattedDate = date('');

      expect(unformattedDate).to.be.empty;

    });

    describe('shoud return an object with', function(){
      var formattedDate = date('11/10/2014');

      it('monthNumber, monthShortString and day keys.', function(){
        expect(formattedDate).to.have.all.keys('monthNumber','monthShortString','day');
      });

      it('monthNumber property of 10.', function(){
        expect(formattedDate).to.have.property('monthNumber').to.equal('10');
      });

      it('monthShortString property of oct.', function(){
        expect(formattedDate).to.have.property('monthShortString').to.equal('Oct');
      });

      it('day property of 11.', function(){
        expect(formattedDate).to.have.property('day').to.equal('11');
      });

    });
  });
});
