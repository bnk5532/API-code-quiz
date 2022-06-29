// question[globalquestionTrackerVariable].answers[i]
// // function endGame(){
//     total the final sc0re
//     remove the questioins from display and answers
//     //empty the button, or just add the classs hide
//     change the next button to submit initials for local storage
// }

// var currentIndex = 0

// function startQuiz() {
//     document.getElementById("question-card").classList.remove("hide")
// displayQuestion()
// }

// function displayQuestion (){
//     console.log(questions[currentIndex].question)
// }

// // displayQuestion()

// document.getElementById("start-quiz").addEventListener("click", startQuiz)

// var scoresDiv = document.getElementById('scores')
// scoresDiv.classList.remove("hide")
// var answer1btn = document.getElementById('option1')
// answer1btn.innerHTML("Replaced to option 1")
// function for your timer

// if conditions dfor

//check if Quiz over() {
//     if(questionsIndex)
// }

// var quizContainer = document.getElementById("quiz");
// var resultsContainer = document.getElementById("results");
// var submitButton = document.getElementById("submit");

// function startQuiz() {

//     const output = [];

//     myQuestions.forEach(currentQuestion, questionNumber) => {}}

//     const answers = [];

//     for(letter in currentQuestion.answers){

//         answers.push(
//             <button>
//                 `<button type="button" name="question${questionNumber}"
//                 value="${letter}"></button>
//                 ${letter}:
//                 ${currentQuestion.answers[letter]}`
//             </button>
//         );

//             output.push(
//                 <div class="slide">
//                 <div class="question"> ${currentQuestion.question}</div>
//                 <div class="answers"> ${answers.join("")}</div>
//             </div>

//             );
//             quizContainer.innerHTML = output.join('');
//         };

// function showResults() {
//     var answerContainers = quizContainer.querySelectorAll('answers');
//     var numCorrect = 0;

//     myQuestions.forEach(currentQuestion,questionNumber => {
//         var answerContainer = answerContainers[questionNumber];
//         var selector = `button[name=question${questionNumber}]:checked`;
//         var userAnswer = (answerContainer.querySelector(selector) || {}).value;

//         if(userAnswer === currentQuestion.correctAnswer){
//             numCorrect++;

//             answerContainers[questionNumber].style.color = 'green';
//         }
//         else {
//             answerContainers[questionNumber].style.color = 'red';
//         }
//     });
// }
//             resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

//         startQuiz();

//         submitButton.addEventListener("click", showResults);

//timer

// function startQuiz() {
//     document.getElementById("question-card").classList.remove("hide")
// displayQuestion()
// }

// document.getElementById("start-quiz").addEventListener("click", startQuiz)

// var scoresDiv = document.getElementById('scores')
// scoresDiv.classList.remove("hide")
// var answer1btn = document.getElementById('option1')
// answer1btn.innerHTML("Replaced to option 1")
var beginButton = document.getElementById("start-quiz");
var questionContainerEl = document.getElementsByClassName("card");
var fiveMins = 60 * 5,
  display = document.querySelector("#time");
var questionEl = document.getElementById("question-placeholder");
var answerEl = document.querySelector(".answer-btns");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("previous");
var currentIndex = 0;
var questions = [
  {
    question: "What are you?",
    answers: ["Human", "Alien", "Sloth", "Unicorn"],
    correctAnswer: "Human",
  },
//   {
//     question: "What planet are you from?",
//     answers: {
//       A: "Mars",
//       B: "Venus",
//       C: "Earth",
//       D: "Pluto (not a planet anymore)",
//     },
//     correctAnswer: "C",
//   },
];

function displayQuestion() {
  console.log(questions[currentIndex].question);
}

displayQuestion();

beginButton.addEventListener("click", startGame);

function startGame() {
  beginButton.classList.add("hide");
  //   questionContainerEl.classList.remove("hide");
  startTimer(fiveMins, display);
  nextQ();
}

function nextQ() {
  questionEl.textContent = questions[0].question;
  for (i = 0; i < 4; i++) {
    console.log(questions[0].answers[i]);
     var choices = document.createElement("button");

     choices.setAttribute("class", "choice");
     choices.setAttribute("value", questions[0].answers[i]);
     choices.textContent = questions[0].answers[i];
     choices.onclick = chooseAnswer;
     answerEl.appendChild(choices)
  }
}

function chooseAnswer() {
    console.log("it worked", questions[0])
    if (this.value === questions[0].correctAnswer){
        console.log("correct")
    }
    else {
        console.log("wrong");
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
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;
    //need to deduct time penalty from timeLeft.
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
