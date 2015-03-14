define(['date'],function(date){
  describe('Date module', function(){
    it('should return a date', function(){
      var date = date('11/02/2014');
      date.shoud.equal('11');
    });
  });
});
