
var beginButton = document.getElementById("start-quiz");
var quizEl = document.getElementById("quiz-elements");
var highScores = document.getElementById("highscores-card");
var questionContainerEl = document.getElementById("quiz-container");
var card = document.querySelector(".card");
var timeLeft = 60;
var display = document.querySelector("#time");
var score 
var questionEl = document.getElementById("question-placeholder");
var answerEl = document.querySelector(".answer-btns");
var nextBtn = document.getElementById("next");
var currentIndex = 0;
var questions = [
  {
    question: "JS stands for?",
    answers: ["Java", "JavaScript", "A really good cup of coffee", "John Smith"],
    correctAnswer: "JavaScript",
  },
  {
    question: "What is the HTML element or tag used for Javascript",
    answers: ["<js>", "<javascript>", "<script>", "<tag>"],
    correctAnswer: "<script>",
  },
  {
    question: "What is Boolean?",
    answers: ["A variable with only two possible values (true/false)", "A skinny ghost", "A ghost in the code", "A ghost's favorite word"],
    correctAnswer: "A variable with only two possible values (true/false)",
  },
  
];

display.textContent=timeLeft;

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
    timer = setInterval(startTimer, 1000);
    
    nextQ();
}



function startTimer() {
    timeLeft--  
    display.textContent = timeLeft;
    if (timeLeft <= 0) {
        endQuiz();
    }
}

function nextQ() {
    if (checkQuestionsLeft()=== false){
        endQuiz()
    } else {  
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
  }}
}

function checkQuestionsLeft() {
  // check if Questions left *questions.length =  currentIndex +1 ()
  if (currentIndex == questions.length) {
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
    card.classList.add("hide");
    highScores.classList.remove("hide");
    beginButton.classList.remove("hide");
    console.log("Quiz over");
    clearInterval(timer);
    score = timeLeft

  // make everything in div id=quiz go awayawa
  // unhide our form
  //show scores
}

function chooseAnswer() {
  if (this.value === questions[currentIndex].correctAnswer) {
    quizEl.classList.add("correct");
  } else {
    quizEl.classList.add("wrong");
    timeLeft -= 25
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



// hsInput = addEventListener("click", hsInput);

// function hsInput(){
//     console.log("click");
// }

$(document).ready(function() {
    $("#hs-btn").click(function(){
        console.log("click")
        var highScoresList = $("input[name=playerInitials]").val() + " ---->  " + timeLeft;
        $("ol").append("<li>" + highScoresList + "</li>");
    });
});



