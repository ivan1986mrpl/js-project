let x = '';
let y = '';
let signOperation = '';
let finish = false;

const answer = document.querySelector('.answer');
const buttons = document.querySelectorAll('.button');

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '*', '/'];

function acButton() {
    x = '';
    y = '';
    signOperation = '';
    finish = false;
    answer.innerText = 0;
    console.log('ac 123');
}

document.querySelector('.ac').addEventListener('click', acButton);

document.querySelector('.buttons').addEventListener('click', (e) => {
    if(!e.target.classList.contains('button')) return;
    if(e.target.classList.contains('ac')) return;
    
    answer.innerText = '';
    const key = e.target.innerText;

    if (digit.includes(key)) {
        if (y === '' && signOperation === '') {
            x += key;
            answer.innerText = x;
            console.log('x = ', x, 'y = ', y, 'sign = ', signOperation);
        } else if (x !== '' && y !== '' && finish) {
            y = key;
            finish = false;
            answer.innerText = y;
        } else {
            y += key;
            answer.innerText = y;
        }
        console.log('x = ', x, 'sign = ', signOperation, 'y = ', y);
        return;
    }

    if (action.includes(key)) {
        signOperation = key;
        answer.innerText = signOperation;
        console.log('sign = ', signOperation);
        return;        
    }

    if (key === '=') {
        if (y === '') y = x;
        switch (signOperation){
            case '+': 
                x = +x + +y;
                break;
            case '-': 
                x = +x - +y;
                break;
            case '*': 
                x = +x * +y;
                break;
            case '/':
                if (y === '0') {
                    answer.innerText = 'Error';
                    x = '';
                    y = '';
                    signOperation = '';
                    return;
                } 
                x = x / y;
                break;
        }
        finish = true;
        answer.innerText = x;
        console.log('x = ', x, 'sign = ', signOperation, 'y = ', y);
    }

});