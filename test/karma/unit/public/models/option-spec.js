define(['underscore', 'models/option'], function(_, Option) {

  describe('When option', function() {

  	describe('right answer is true and the user answered true', function() {
  		it('isCorrect should return true', function() {
	      var option = new Option({
	      	rightAnswer: true,
      		answered: true
	      });

	      expect(option.isCorrect()).toEqual(true);
	    });
  	});

    describe('right answer is true and the user answered false', function() {
      it('isCorrect should return false', function() {
        var option = new Option({
          rightAnswer: true,
          answered: false
        });

        expect(option.isCorrect()).toEqual(false);
      });
    });
  });

});