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

var currentIndex = 0

function startQuiz() {
    document.getElementById("question-card").classList.remove("hide")

displayQuestion()
}

function displayQuestion (){
    console.log(questions[currentIndex].question)
}

var questions = [
  {
    question: "What ?????",
},
];

// displayQuestion()

document.getElementById("start-quiz").addEventListener("click", startQuiz)


// var scoresDiv = document.getElementById('scores')
// scoresDiv.classList.remove("hide")
// var answer1btn = document.getElementById('option1')
// answer1btn.innerHTML("Replaced to option 1")
// function for your timer

// if conditions dfor

//check if Quiz over() {
//     if(questionsIndex)
// }
