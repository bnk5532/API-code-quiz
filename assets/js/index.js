// question : [{
//     question: aasdfsdfasd,
//     answers: ['asdf','asdfasdf'],
//     correct: "asdf"
// },]
// answers
// score
// timer
// identify correct/incorrect answers
// tally final score
// incorrect answer time penalty
// timer to 0, game ends

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

// var questions = [
//   {
//     question: "What are you?",
//     answers: {
//        A: "Human",
//        B: "Alien",
//        C: "Sloth",
//        D: "Unicorn"
//   },
//   correctAnswer: "A"
// },
// {
//     question: "What planet are you from?",
//     answers: {
//         A: "Mars",
//         B: "Venus",
//         C: "Earth",
//         D: "Pluto (not a planet anymore)"
//     },
//     correctAnswer: "C"
// }
// ];

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

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

function startQuiz() {

    const output = []

    myQuestions.forEach(currentQuestion, questionNumber) => {
        const answers = [];
        
        for(letter in currentQuestion.answers){

            answers.push(
                <button>
                    <button type="button" name="question${questionNumber}"
                    value="${letter}"></button>
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </button>
            );
        }
    }
}

output.push(
    <><div class="question"> ${currentQuestion.question}</div>
    <div class="answers"> ${answers.join('')}</div></>
)

function showResults() {}

startQuiz();

submitButton.addEventListener("click", showResults);

var questions = [
  {
    question: "What are you?",
    answers: {
      A: "Human",
      B: "Alien",
      C: "Sloth",
      D: "Unicorn",
    },
    correctAnswer: "A",
  },
  {
    question: "What planet are you from?",
    answers: {
      A: "Mars",
      B: "Venus",
      C: "Earth",
      D: "Pluto (not a planet anymore)",
    },
    correctAnswer: "C",
  },
];
