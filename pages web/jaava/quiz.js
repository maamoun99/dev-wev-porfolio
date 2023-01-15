const questions = [
  {
  question: "Quelle est la voiture la plus rapide au monde?",
  answers: {
    a: "Bugatti Chiron Super Sport 300+",
    b: "Koenigsegg Jesko",
    c: "Hennessey Venom F5",
    d: "Bugatti Veyron Super Sport"
  },
  correctAnswer: "a"
},
{
  question: "Quelle est la voiture la plus vendue au monde?",
  answers: {
    a: "Toyota Corolla",
    b: "Ford F-Series",
    c: "Honda Civic",
    d: "VW Golf"
  },
  correctAnswer: "a"
},
{
  question: "Quelle est la voiture électrique la plus vendue au monde?",
  answers: {
    a: "Tesla Model 3",
    b: "Nissan Leaf",
    c: "Chevrolet Bolt",
    d: "BMW i3"
  },
  correctAnswer: "a"
},
{
  question: "Quelle est la voiture hybride la plus vendue au monde?",
  answers: {
    a: "Toyota Prius",
    b: "Ford Fusion",
    c: "Chevrolet Volt",
    d: "BMW i8"
  },
  correctAnswer: "a"
},
{
  question: "Quelle est la voiture de sport la plus célèbre au monde?",
  answers: {
    a: "Lamborghini Aventador",
    b: "Ferrari Enzo",
    c: "Porsche 911"
            },
            correctAnswer: "a"
        },
        
    

// more questions
];

// Quiz container
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('result');
const submitButton = document.getElementById('submit-button');

// Display quiz
displayQuiz();

submitButton.onclick = showResults;

function displayQuiz() {
// Output questions and answers
let output = [];
questions.forEach((currentQuestion, questionNumber) => {
    // Answers
    let answers = [];
    for (letter in currentQuestion.answers) {
        answers.push(
            `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
            </label>`
        );
    }

    // Add question and answers to output
    output.push(
        `<div class="question" style="font-weight: bold;"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
    );
});

// Combine output and add to quiz container
quizContainer.innerHTML = output.join('');
}

function showResults() {
// gather answer containers from our quiz
let answerContainers = quizContainer.querySelectorAll('.answers');

// keep track of user's answers
let numCorrect = 0;

// for each question...
questions.forEach((currentQuestion, questionNumber) => {
    // find selected answer
    let userAnswer = (answerContainers[questionNumber].querySelector(`input[name=question${questionNumber}]:checked`) || {}).value;

    // if answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'green';
    } else {
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
    }
});

// show number of correct answers out of total
resultsContainer.innerHTML = numCorrect +' sur ' + questions.length;
}
