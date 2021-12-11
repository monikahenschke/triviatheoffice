"use strict"
import css from "./style.css";
import * as startComponent from './start-page'

//Event Listeners
window.addEventListener('DOMContentLoaded',() => {
    startComponent.createStartpage();
    const startButton = document.querySelector('.trivia__startButton');
    startButton.addEventListener('click', startComponent.startQuizButtonClick);

});