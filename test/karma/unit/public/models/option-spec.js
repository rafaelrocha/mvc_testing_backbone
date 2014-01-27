define(['underscore', 'models/option'], function(_, Option) {

  describe('Option model', function() {

  	describe('when the right answer is true and the user answered true', function() {
  		it('should return true', function() {
	      var option = new Option({
	      	rightAnswer: true,
      		answered: true
	      });

	      expect(option.isCorrect()).toEqual(true);
	    });
  	});

  });

});