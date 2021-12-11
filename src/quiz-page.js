import { takeUsersAnswers } from './summary-page'

const containerDiv = document.querySelector('.trivia__container');
const quizDiv = document.createElement('div');
const quizTopDiv = document.createElement('div');
quizDiv.classList.add('trivia__quizDiv');
quizTopDiv.classList.add('trivia__quizTop');


export function createQuizPage() {

    const url = "http://127.0.0.1:5000/questions";
   fetch(url)
        .then(response => response.json())
        .then(result => result.questions)
        .then(questions => displayQuestions(questions))
        .catch(function (err){
            return err;
        })
}


function displayQuestions(questions) {
    const quizListDiv = document.createElement('form');
    const startPageH2 = document.createElement('h2');
    const startPageDescription = document.createElement('p');
    const endQuizButton = document.createElement('button');

    endQuizButton.innerText = "SAVE ANSWERS";
    endQuizButton.classList.add('trivia__endQuizButton');
    startPageH2.innerText = ',,The Office" Trivia Quiz';
    startPageDescription.innerText = 'Are you ready? Answer the questions below and check if you can eat additional kinder bueno today as a reward!';
    quizListDiv.classList.add('trivia__questionList');

    let questionID = 0;
    questions.forEach(element => {
        let questionDiv = document.createElement('div');
        let answersDiv = document.createElement('div');
        let questionText = document.createElement('p');
        questionDiv.classList.add('trivia__question');
        answersDiv.classList.add('trivia__answers');
        questionDiv.classList.add('question-'+ questionID);
        questionText.innerText = element.question;
        questionDiv.appendChild(questionText);
        quizListDiv.appendChild(questionDiv);
        questionDiv.appendChild(answersDiv);

        let answerID = 0;
        element.answers.forEach(answer => {

            let name = 'answer-'+questionID;
            let answerLabel = document.createElement('label');
            let answerInput = document.createElement('input');
            let answerCheckmark = document.createElement('span');
            answerLabel.classList.add('trivia__answer');
            answerCheckmark.classList.add('trivia__checkmark');
            answerInput.setAttribute('type', 'radio');
            answerInput.setAttribute('name', name)
            answerInput.setAttribute('value', answerID)
            answerLabel.innerText = answer;
            answerLabel.appendChild(answerInput);
            answerLabel.appendChild(answerCheckmark);

            answersDiv.appendChild(answerLabel);
            answerID++;

        })


       questionID++;

    });
    
    quizDiv.appendChild(quizTopDiv);
    quizTopDiv.appendChild(startPageH2);
    quizTopDiv.appendChild(startPageDescription);
    quizDiv.appendChild(quizListDiv);
    quizDiv.appendChild(endQuizButton);
    containerDiv.appendChild(quizDiv);

    endQuizButton.addEventListener('click', () => takeUsersAnswers(questions));


}
