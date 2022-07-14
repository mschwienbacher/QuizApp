let questions = [
{
    "question": "Who is making the Web standards?",
    "answer_1": "<span>A</span> Google",
    "answer_2": "<span>B</span> Mozilla",
    "answer_3": "<span>C</span> Microsoft",
    "answer_4": "<span>D</span> The World Wide Web Consortium",
    "right_answer": 1
},
{
    "question": "What does CSS stand for?",
    "answer_1": "Creative Style Sheets",
    "answer_2": "Computer Style Sheets",
    "answer_3": "Colorful Style Sheets",
    "answer_4": "Cascading Style Sheets",
    "right_answer": 4
},
{
    "question": "Which data type is used to create a variable that should store text?",
    "answer_1": "Txt",
    "answer_2": "string",
    "answer_3": "myString",
    "answer_4": "String",
    "right_answer": 4
},
{
    "question": "",
    "answer_1": "",
    "answer_2": "",
    "answer_3": "",
    "answer_4": "",
    "right_answer": ""
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
    let question = questions[currentQuestion];
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