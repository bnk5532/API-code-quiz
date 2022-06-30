
var beginButton = document.getElementById("start-quiz");
var quizEl = document.getElementById("quiz-elements");
var highScores = document.getElementById("highscores-card");
var questionContainerEl = document.getElementById("quiz-container");
var card = document.querySelector(".card")
var fiveMins = 60 * 5,
  display = document.querySelector("#time");
  var score = 0;
var questionEl = document.getElementById("question-placeholder");
var answerEl = document.querySelector(".answer-btns");
var nextBtn = document.getElementById("next");
var currentIndex = 0;
var questions = [
  {
    question: "What are you?",
    answers: ["Human", "Alien", "Sloth", "Unicorn"],
    correctAnswer: "Human",
  },
  {
    question: "What planet are you from?",
    answers: ["Mars", "Venus", "Earth", "Pluto (not a planet anymore)"],
    correctAnswer: "C",
  },
];
function displayQuestion() {
  console.log(questions[currentIndex].question);
}

displayQuestion();

beginButton.addEventListener("click", startGame);
nextBtn.addEventListener("click", () => {
  currentIndex++;
  nextQ();
});

function startGame() {
  beginButton.classList.add("hide");
  card.classList.add("hide");
  quizEl.classList.remove("hide");
  highScores.classList.add("hide");

  startTimer(fiveMins, display);
  nextQ();
}

function nextQ() {
  quizEl.classList.remove("wrong");
  quizEl.classList.remove("correct");
  answerEl.innerHTML = "";
  questionEl.textContent = questions[currentIndex].question;
  for (i = 0; i < 4; i++) {
    var choices = document.createElement("button");
    choices.setAttribute("class", "choice");
    choices.setAttribute("value", questions[currentIndex].answers[i]);
    choices.textContent = questions[currentIndex].answers[i];
    choices.onclick = chooseAnswer;
    answerEl.appendChild(choices);
  }
}

function checkQuestionsLeft() {
  // check if Questions left *questions.length =  currentIndex +1 ()
  if (currentIndex == questions.length - 1) {
    return false;
  }
  return true;
}
/* <ul id ="highscores list"></ul>
fetchScores(){
    highscores = localStorage.getItem("highscores") */
    // for each item in highscores
    //     create an list item,
    //     set the innerHTML of the list to the value of the highscores
    //     append the list item to your ul
    

function endQuiz() {
    quizEl.classList.add("hide");
    card.classList.remove("hide");
    highScores.classList.remove("hide");
    beginButton.classList.remove("hide");
        beginButton.innerHTML = "Play Again";
    console.log("Quiz over");
  score = "time left";

  // make everything in div id=quiz go awayawa
  // unhide our form
  //show scores
}

function chooseAnswer() {
  if (this.value === questions[currentIndex].correctAnswer) {
    quizEl.classList.add("correct");
  } else {
    quizEl.classList.add("wrong");
  }
  if (checkQuestionsLeft() === false) {
    return endQuiz();
  }

  //   if (answers.correct) {
  //     choiceBtn.dataset.correct = answers.correctAnswer;
  //     alert("Correct Answer!");
  //     questionEl++;
  //   } else {
  //     alert("Incorrect.");
  //     questionEl++;
  //     //   timeLeft = timeLeft-10;
  //   }

  //   nextBtn.addEventListener("click", nextQ);
}

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;
    if (--timer < 0) {
      timer = duration;
      alert("Time is up!");
    }
  }, 1000);
}

// onload = function(){
// var fiveMins = 60 * 5,
//     display = document.querySelector('#time');
//     startTimer(fiveMins, display);
// };
