let questions = [
{
    "question": "Who is making the Web standards?",
    "answer_1": "<span>A</span> Google",
    "answer_2": "<span>B</span> Mozilla",
    "answer_3": "<span>C</span> Microsoft",
    "answer_4": "<span>D</span> The World Wide Web Consortium",
    "right_answer": 4,
    "percent": 20
},
{
    "question": "What does CSS stand for?",
    "answer_1": "<span>A</span> Creative Style Sheets",
    "answer_2": "<span>B</span> Computer Style Sheets",
    "answer_3": "<span>C</span> Colorful Style Sheets",
    "answer_4": "<span>D</span> Cascading Style Sheets",
    "right_answer": 4,
    "percent": 40
},
{
    "question": "Which data type is used to create a variable that should store text?",
    "answer_1": "<span>A</span> Txt",
    "answer_2": "<span>B</span> string",
    "answer_3": "<span>C</span> myString",
    "answer_4": "<span>D</span> String",
    "right_answer": 4,
    "percent": 60
},
{
    "question": "What is the correct way to end a PHP statement?",
    "answer_1": "<span>A</span> New line",
    "answer_2": "<span>B</span> ;",
    "answer_3": "<span>C</span> .",
    "answer_4": "<span>D</span> php>",
    "right_answer": 2,
    "percent": 80
}
]

let currentQuestion = -1;

function init() {
    questionLenght();
}

function questionLenght() {
    let qLength = document.getElementById("question-length");
    qLength.innerHTML = questions.length;
}

function showQuestion() {
    if(currentQuestion == -1) {
        updateProgressBar(0);
        currentQuestion++;
        showQuestion();
    }
    else if (currentQuestion == 0) {
        showQuestionTemplate();
        updateProgressBar(questions[currentQuestion]["percent"]);
    }
    else if (currentQuestion >= questions.length) {
        showFinalePage();
        updateProgressBar(100);
        document.body.classList.add('the-result');
    } else {
        showQuestionTemplate();
        updateProgressBar(questions[currentQuestion]["percent"]);
    }
}

function updateProgressBar(status) {
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = `
        <div class="progress-bar" role="progressbar" style="width: ${status}%;" aria-valuenow="${status}" aria-valuemin="0" aria-valuemax="100" id="percent">${status}%</div>
    `;
}

function showStartPage() {
    let main = document.getElementById("main-card");
    main.innerHTML = `
        
    `;
}

function showQuestionTemplate() {
    let main = document.getElementById("main-card");
    let question = questions[currentQuestion];
    document.getElementById("curr-question").innerHTML = currentQuestion + 1;
    main.innerHTML = `
        <h2 id="single-question">${question["question"]}</h2>
        <ul class="list-group list-group-flush" id="questionList">
            <li class="list-group-item" id="answer_1" onclick="answer('answer_1');">
                ${question["answer_1"]}
            </li>
            <li class="list-group-item" id="answer_2" onclick="answer('answer_2');">
                ${question["answer_2"]}
            </li>
            <li class="list-group-item" id="answer_3" onclick="answer('answer_3');">
                ${question["answer_3"]}
            </li>
            <li class="list-group-item" id="answer_4" onclick="answer('answer_4');">
                ${question["answer_4"]}
            </li>
        </ul>
        <button class="btn btn-success" id="next-question" disabled onclick="nextQuestion();">Nächste Frage</button>
    `;
}

function showFinalePage() {
    let main = document.getElementById("main-card");
    main.innerHTML = `
        <img src="images/result.png" width="180" height="180" alt="" class="result-img">
        <h2>Coding-Quiz <br> completed</h2>
        <p class="score">
            <span>Your score:</span>
            <span class="points"><strong>10 / ${questions.length}</strong></span>
        </p>
        <p class="final-buttons">
            <button id="next-question" class="btn btn-primary">Replay</button>
        </p>
    `;
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