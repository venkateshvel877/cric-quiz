const questions =[
{
    question:"who is the australian test team captain?",
    choices:[ "rohit","buttler","markram","pat cummins"],
    correct: 3
},
{
    question:"which team win the t20 worldcup in 2024?",
    choices:["south africa","england","india","australia"],
    correct: 2
},
{
    question:"who is the most stylist cricketer in current generation?",
    choices:["virat","butler","shanaka","bumrah"],
    correct: 0
},
{
    question:"who is sachin tendulkar?",
    choices:["boxer","cricketer","engineer","swimmer"],
    correct: 1
},
{ 
    question:"england fastest bowler?",
    choices:["anderson","ben stokes","mark wood","joe root"],
    correct: 2
},
];

let currentQuestion = 0;
let correctAnswers = 0;

function showQuestion() {
const questionText = document.getElementById("question-text");
questionText.textContent = questions[currentQuestion].question;

const choices = document.querySelectorAll(".choice");
choices.forEach((choice, index) => {
  choice.textContent = questions[currentQuestion].choices[index];
});

const feedback = document.getElementById("feedback");
feedback.textContent = "";
console.log("feedback",showQuestion)
}

function checkAnswer(selected) {
    console.log("logging checkanswer")
const feedback = document.getElementById("feedback");
if (selected === questions[currentQuestion].correct) {
    console.log("CHecking correct")
  feedback.textContent = "Correct!";
  correctAnswers++;
} else {
    console.log("CHecking wrong")
  feedback.textContent = "Incorrect!";
}

setTimeout(() => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();     
  } else {
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = `<p>You got ${correctAnswers} out of ${questions.length} questions.</p>`;
  }
}, 2000);
}

showQuestion();
    
        




