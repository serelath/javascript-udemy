var Question = function(question, answer, correct) {
    this.question = question;
    this.answer = answer;
    this.correct = correct;
}

Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0 ; i < this.answer.length ; i++) {
        console.log(i + ': ' + this.answer[i]);
    }
}

Question.prototype.checkAnswer = function(ask, callback) {
    var sc;
    if (ask == this.correct) {
        console.log('That is correct!');
        sc = callback(true);
    } else {
        console.log('That is incorrect.');
        sc = callback(false);
    }
    this.displayScore(sc);
}

Question.prototype.displayScore = function(score) {
    console.log('Your current score is: ' + score);
    console.log('=======================');
}

function score() {
    var sc = 0;
    return function(correct) {
        if (correct) {
            sc++;
        }
        return sc;
    }
}
        
var keepScore = score();

var q1 = new Question('What is my favorite color?', ['Black', 'Yellow', 'Teal'], 0);
var q2 = new Question('Am I learning Javascript?', ['Yes', 'No'], 0);
var q3 = new Question('How old am I?', [20, 21, 22], 1);

var questions = [q1, q2, q3];

(function popupQuestion() {
    var x = Math.floor(Math.random() * 2);
    
    questions[x].displayQuestion();
    
    var askQuestion = prompt(questions[x].question);
    if (askQuestion != 'exit') {
        questions[x].checkAnswer(askQuestion, keepScore);
        popupQuestion();
    } else {
        console.log('Quiz stopped.')
    }
    
})();


