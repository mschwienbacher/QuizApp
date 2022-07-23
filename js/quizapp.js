let questions = [
{
    "question": "Who is making the Web standards?",
    "answer_1": "<span>A</span> Google",
    "answer_2": "<span>B</span> Mozilla",
    "answer_3": "<span>C</span> Microsoft",
    "answer_4": "<span>D</span> The World Wide Web Consortium",
    "right_answer": 4
},
{
    "question": "What does CSS stand for?",
    "answer_1": "<span>A</span> Creative Style Sheets",
    "answer_2": "<span>B</span> Computer Style Sheets",
    "answer_3": "<span>C</span> Colorful Style Sheets",
    "answer_4": "<span>D</span> Cascading Style Sheets",
    "right_answer": 4
},
{
    "question": "Which data type is used to create a variable that should store text?",
    "answer_1": "<span>A</span> Txt",
    "answer_2": "<span>B</span> string",
    "answer_3": "<span>C</span> myString",
    "answer_4": "<span>D</span> String",
    "right_answer": 4
},
{
    "question": "What is the correct way to end a PHP statement?",
    "answer_1": "<span>A</span> New line",
    "answer_2": "<span>B</span> ;",
    "answer_3": "<span>C</span> .",
    "answer_4": "<span>D</span> php>",
    "right_answer": 2
}
]

let currentQuestion = 0;

function init() {
    questionLenght();
    showQuestion();
}

function questionLenght() {
    let qLength = document.getElementById("question-length");
    qLength.innerHTML = questions.length;
}

function showQuestion() {


    if(currentQuestion >= questions.length) {
        //TODO  Show END Page
        alert("now");
    } else {
        let question = questions[currentQuestion];
        document.getElementById("curr-question").innerHTML = currentQuestion + 1;
        let singleQuestion = document.getElementById("single-question");
        let question1 = document.getElementById("answer_1");
        let question2 = document.getElementById("answer_2");
        let question3 = document.getElementById("answer_3");
        let question4 = document.getElementById("answer_4");

        singleQuestion.innerHTML = question["question"];
        question1.innerHTML = question["answer_1"];
        question2.innerHTML = question["answer_2"];
        question3.innerHTML = question["answer_3"];
        question4.innerHTML = question["answer_4"];
    }
}

function answer(selection) {
    let currQuestion = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let correctAnswer = questions[currentQuestion]["right_answer"];

    let nextQuestion = document.getElementById("next-question");

    if(selectedQuestionNumber == correctAnswer) {
        document.getElementById(selection).classList.add("correct");
    } else {
        document.getElementById(selection).classList.add("wrong");
        document.getElementById("answer_" + correctAnswer).classList.add("correct");
    }

    nextQuestion.removeAttribute("disabled");
    
    
}

function nextQuestion() {
    currentQuestion++;
    showQuestion();
    cleanStyle(); 
}

function cleanStyle() {
    let nextQuestion = document.getElementById("next-question");
    nextQuestion.setAttribute("disabled", "disabled");
    let listElements = document.getElementById("questionList").getElementsByTagName('li');
    for(let i = 0; i < listElements.length; i++) {
        let el = listElements[i];
        el.classList.remove("correct");
        el.classList.remove("wrong");
    }
}