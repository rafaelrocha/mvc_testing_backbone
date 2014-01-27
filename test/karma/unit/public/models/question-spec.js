define(['underscore', 'models/question', 'models/option'], function(_, Question, Option) {

  describe('When question', function() {

    var question;

    beforeEach(function() {
      question = new Question({
        description: "System under test"
      });
    });
    
    describe('has 0 options', function() {
      it('correctAnswersInPercentage should return undefined', function() {
        expect(question.correctAnswersInPercentage()).toEqual(undefined);
      })
    });

    describe('has 4 options and user right asnwered two of them', function() {
      it('correctAnswersInPercentage should return 0.5', function() {
        var options = question.get("optionns");
        
        for (var i = 0; i < 2; i++) {
          options.push(new Option({
            id: i,
            description: "Option true",
            rightAnswer: true
          }))
        }
        
        for (var i = 2; i < 4; i++) {
          options.push(new Option({
            id: i,
            description: "Option false",
            rightAnswer: false
          }))
        }

        expect(question.correctAnswersInPercentage()).toEqual(0.5);
      });
    });

  });

});