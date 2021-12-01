

export function takeUsersAnswers(questionsArray) {

    let questionNumber = 0;
    questionsArray.forEach(element => {
        // console.log(element);
        let answerDiv = document.querySelector('.question-' + questionNumber);

        let answerInputs = answerDiv.querySelectorAll('input');
        let selectedValue;
        for (const input of Array.from(answerInputs)) {
            if (input.checked) {
                selectedValue = input.value;
                break;
            }
        }
        element["answer"] = selectedValue;

        questionNumber++;
    });
    checkUserAnswers(questionsArray);
}

function checkUserAnswers(questionsArray) {
    const body = JSON.stringify(questionsArray);
    fetch('http://127.0.0.1:5000/answers', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: body,
    })
        .then(async response => await response.json())
        .then(questionsArray => {
            console.log('Success:', questionsArray);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}