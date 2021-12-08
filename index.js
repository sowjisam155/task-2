var readlineSync = require("readline-sync");

var score = 0;
var highScores = [
  {
    name: "sowji",
    score: 2,
  },

  {
    name: "ram",
    score: 4,
  },
]

var questions = [{
  question: "Where do I live? ",
  answer: "bangalore"
}, {
  question: "My favorite superhero would be? ",
  answer: "pattetiram"
},
{
  question: "Where do I work? ",
  answer: "software"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");
}
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))

}
welcome();
game();
showScores();


