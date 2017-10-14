
var panel = $('#quiz-area');


$(document).on('click', '#start', function(e) {
  game.start();
});

$(document).on('click', '#done', function(e) {
  game.done();
});

//questions/answers
var questions = [{
  question: "How many Kardashians are expecting right now?",
  answers: ["1", "3", "5", "7"],
  correctAnswer: "3"
}, {
  question: "What is the top grossing film of 2017 so far?",
  answers: ["Wonder Woman", "Beauty and the Beast", "Guardians of the Galaxy Vol. 2", "Spider-Man: Homecoming"],
  correctAnswer: "Beauty and the Beast"
}, {
  question: "What celebs gave birth to twins this year?",
  answers: ["Beyonce/Jay-Z", "Hannah Davis/Derek Jeter", "Serena Williams/Alexis Ohanian", "Priscilla Chan/Mark Zuckerberg"],
  correctAnswer: "Beyonce/Jay-Z"
}, {
  question: "Who is the highest paid tv personality in 2017?",
  answers: ["Steve Harvey", "Ellen DeGeneres", "Judge Judy", "Bill O'Reilly"],
  correctAnswer: "Judge Judy"
}, {
  question: "What actor is famous for their portrayals of the 45th President?",
  answers: ["Kate McKinnon", "Alec Baldwin", "Darrell Hammond", "Will Smith"],
  correctAnswer: "Alec Baldwin"
}, {
  question: "Which music festival has the highest average attendance?",
  answers: ["Bonnaroo", "Coachella", "Lollapalooza", "Austin City Limits"],
  correctAnswer: "Austin City Limits"
}, {
  question: "Which famous athlete made news by taking a knee during the national anthem to protest police brutality?",
  answers: ["Colin Kaepernick", "LeBron James", "Mike Trout", "Cristiano Ronaldo"],
  correctAnswer: "Colin Kaepernick"
}, {
  question: "Which tv show won the most Emmy Awards in 2017?",
  answers: ["Game of Thrones", "The Walking Dead", "The Handmaid's Tale", "The Apprentice"],
  correctAnswer: "The Handmaid's Tale"
}, {
  question: "Which popular Netflix show is based on a comic book?",
  answers: ["Riverdale", "House of Cards", "Orange Is the New Black", "13 Reasons Why"],
  correctAnswer: "Riverdale"
}, {
  question: "Which Batman star split from his long-time wife in 2017?",
  answers: ["Heath Ledger", "Christian Bale", "Ben Affleck", "George Clooney"],
  correctAnswer: "Ben Affleck"
}];

var game = {
  correct:0,
  incorrect:0,
  counter:90,
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      console.log('TIME UP');
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);

    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">90</span> Seconds</h2>');
    $('#start').remove();


    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }

    panel.append('<button id="done">Done?</button>');
  },
  done: function() {


    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
     $.each($("input[name='question-8']:checked"), function() {
      if ($(this).val() == questions[8].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
      $.each($("input[name='question-9']:checked"), function() {
      if ($(this).val() == questions[9].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },
    result: function() {

    clearInterval(timer);

    $('#subwrapper h2').remove();
    panel.html('<h2>Done!</h2>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
  }

};