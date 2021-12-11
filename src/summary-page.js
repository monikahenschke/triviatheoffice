
export function takeUsersAnswers(questionsArray) {

    let questionNumber = 0;
    questionsArray.forEach(element => {
        let answerDiv = document.querySelector('.question-' + questionNumber);

        let answerInputs = answerDiv.querySelectorAll('input');
        let selectedValue;
        for (const input of Array.from(answerInputs)) {
            if (input.checked) {
                selectedValue = input.value;
                break;
            }
        }
        element["answer"] = parseInt(selectedValue);

        if(!selectedValue) {
            answerDiv.classList.add('no-answer');
        } else {
            answerDiv.classList.remove('no-answer');
        }

        questionNumber++;
    });
    let noAnswer = document.querySelector('.no-answer');
    if (!noAnswer) {
        checkUserAnswers(questionsArray);
    }
}

function checkUserAnswers(userAnswers) {
    const body = JSON.stringify(userAnswers);
    fetch('http://127.0.0.1:5000/answers', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: body,
    })
        .then(async response => await response.json())
        .then(userAnswers => {
            console.log('Success:', userAnswers);
            createSummaryPage(userAnswers);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function createSummaryPage(userAnswers) {

    const triviaQuizDiv = document.querySelector('.trivia__quizDiv'); 
    const containerDiv = document.querySelector('.trivia__container');
    const startPageH2 = document.createElement('h2');
    const startPageDescription = document.createElement('p');
    const quizTopDiv = document.createElement('div');
    const resultDiv = document.createElement('div');
    let summaryPage = document.createElement('div');
    let questionID = 0;
    let correctAnswerCounter = 0;

    quizTopDiv.classList.add('trivia__quizTop');
    summaryPage.classList.add('summaryPage');
    resultDiv.classList.add('resultDiv');
    startPageH2.innerText = ',,The Office" Trivia Quiz';
    startPageDescription.innerText = 'Summary';

    summaryPage.appendChild(quizTopDiv);
    quizTopDiv.appendChild(startPageH2);
    quizTopDiv.appendChild(startPageDescription);

    triviaQuizDiv.remove();

    userAnswers.forEach(element => {
        let questionDiv = document.createElement('div');
        let answersDiv = document.createElement('div');
        let questionText = document.createElement('p');
        const quizTopDiv = document.createElement('div');
        let answerID = 0;
        
        questionDiv.classList.add('trivia__question');
        answersDiv.classList.add('summaryPage__answers');
        quizTopDiv.classList.add('trivia__quizTop');
        questionDiv.classList.add('question-'+ questionID);
        questionText.innerText = element.question;
        questionDiv.appendChild(questionText);
        summaryPage.appendChild(questionDiv);
        questionDiv.appendChild(answersDiv);

     
        element.answers.forEach(answer => {
            let answerClass = 'summaryPage__answer';

            if(parseInt(element.answer) === answerID) {
                if (element.isCorrect === "true") {
                    answerClass = 'usersGoodChoice';
                    correctAnswerCounter++;
                } else {
                    answerClass = 'usersBadChoice';
                }
            } 
            let answerSpan = document.createElement('span');
            answerSpan.classList.add(answerClass);
            answerSpan.innerText = answer;
            answersDiv.appendChild(answerSpan);
            answerID++;

        })
       questionID++;

    });

    resultDiv.innerHTML = `<p>You have ${correctAnswerCounter} correct answers. Check your correct answer colored <span class="usersGoodChoice">green</span> and incorrect colored <span class="usersBadChoice">red</span>.</p>`;
    containerDiv.appendChild(summaryPage);
    containerDiv.appendChild(resultDiv);
}