'use strict';

const answer = document.querySelector('.answer');
const buttons = document.querySelectorAll('.button');

buttons.forEach((item) => {
    item.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'AC':
                answer.innerText = '0';
                break;
            case '=':
                try {
                    answer.innerText = eval(answer.innerText);//встроенная функция js
                } catch (e) {
                    answer.innerText = 'Error';
                }
                break;
            case '+/-':
                if (answer.innerText.includes('-')) {
                    answer.innerText = answer.innerText.replace('-', '');
                } else {
                    let negative = '-' + answer.innerText;
                    answer.innerText = negative;
                }
                break;
            case '%':
                let percent = answer.innerText + '/100';
                answer.innerText = eval(percent);
                break;
            default:
                if (answer.innerText === '0' && e.target.innerText !== '.') {
                    answer.innerText = e.target.innerText;
                } else {
                    answer.innerText += e.target.innerText;// += чтобы следующий символ добавлялся к предыдущему при вызове
                }
        }
    });
});