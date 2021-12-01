import { createQuizPage } from './quiz-page'
 
const containerDiv = document.querySelector('.trivia__container');

export function createStartpage() {
    const startPageDiv = document.createElement('div');
    startPageDiv.classList.add('trivia__startPage');

    const startPageH1 = document.createElement('h1');
    startPageH1.innerText = ',,The Office" Trivia Quiz';
    startPageDiv.appendChild(startPageH1);

    const startPageP = document.createElement('p');
    startPageP.classList.add('trivia__description');
    startPageP.innerText = 'check how well you know your favorite TV series!';
    startPageDiv.appendChild(startPageP);

    const startPageButton = document.createElement('button');
    startPageButton.classList.add('trivia__startButton');
    startPageButton.innerText = 'START';
    startPageDiv.appendChild(startPageButton);

    containerDiv.appendChild(startPageDiv);
}

export function startQuizButtonClick() {
    const startpageDiv = document.querySelector('.trivia__startPage');
    containerDiv.removeChild(startpageDiv);
    createQuizPage();
}