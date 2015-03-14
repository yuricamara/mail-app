define(['date'],function(date){
  describe('Date module', function(){
    it('should return a date', function(){
      var date = '11/10/2014';
      date.should.equal('11/10/2014');
    });
  });
});
