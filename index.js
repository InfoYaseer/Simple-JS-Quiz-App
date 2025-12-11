const questions = [
    {
        question:"What is the capital of Japan?",
        answers: [
            {text:"Beijing", correct: false},
            {text:"Tokyo", correct: true},
            {text:"Seoul", correct: false},
            {text:"Bangkok", correct: false},
        ]
    },
    {
        question:"Which planet is known as the Red Planet?",
        answers: [
            {text:"Venus", correct: false},
            {text:"Mars", correct: true},
            {text:"Jupiter", correct: false},
            {text:"Saturn", correct: false},
        ]
    },
    {
        question:"Who wrote the play “Romeo and Juliet”?",
        answers: [
            {text:"Charles Dickens", correct: false},
            {text:"Mark Twain", correct: false},
            {text:"Leo Tolstoy", correct: false},
            {text:"William Shakespeare", correct: true},
        ]
    },
    {
        question:"Which is the largest ocean on Earth?",
        answers: [
            {text:"Atlantic Ocean", correct: false},
            {text:"Indian Ocean", correct: false},
            {text:"Pacific Ocean", correct: true},
            {text:"Arctic Ocean", correct: false},
        ]
    },
    {
        question:"How many continents are there in the world?",
        answers: [
            {text:"5", correct: false},
            {text:"6", correct: false},
            {text:"7", correct: true},
            {text:"8", correct: false},
        ]
    },
    {
        question:"What is the national animal of India?",
        answers: [
            {text:"Lion", correct: false},
            {text:"Tiger", correct: true},
            {text:"Elephant", correct: false},
            {text:"Peacock", correct: false},
        ]
    },
    {
        question:"How many days are there in a leap year?",
        answers: [
            {text:"364", correct: false},
            {text:"365", correct: false},
            {text:"367", correct: false},
            {text:"366", correct: true},
        ]
    },
    {
        question:"Which country invented pizza?",
        answers: [
            {text:"France", correct: false},
            {text:"India", correct: false},
            {text:"Italy", correct: true},
            {text:"United States", correct: false},
        ]
    },
    {
        question:"What is the hardest natural substance on Earth?",
        answers: [
            {text:"Gold", correct: false},
            {text:"Diamond", correct: true},
            {text:"Iron", correct: false},
            {text:"Quartz", correct: false},
        ]
    },
    {
        question:"Which gas do plants absorb during photosynthesis?",
        answers: [
            {text:"Oxygen", correct: false},
            {text:"Nitrogen", correct: false},
            {text:"Carbon Dioxide", correct: true},
            {text:"Hydrogen", correct: false},
        ]
    }
];

const questionElement = document.getElementById("quistion");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("nextbtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextbutton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length){
        handleNextbutton();
    }else{
        startQuiz();
    }
});

startQuiz();


