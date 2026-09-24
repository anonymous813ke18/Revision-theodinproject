const displayScreen = document.querySelector(".display-screen");
const btnContainer = document.querySelector(".btn-container");
const currentOperation = document.querySelector(".current-operation");
let num1 = '', num2 = '', operator = '';

displayScreen.value = '';

btnContainer.addEventListener('click', e => {
    if (e.target.tagName !== 'BUTTON') 
        return;

    if (Number(e.target.textContent) || e.target.textContent == '0') {
        if (operator == '') {
            num1 += e.target.textContent;
            displayScreen.value = num1
        } else {
            num2 += e.target.textContent;
            displayScreen.value = num2;
        }
    } else if (['+', '-', '*', '/', '%'].includes(e.target.textContent)) {
        if (num1 == '')
            return;

        if (num2 !== '') {
            if (operator == '+') {
                num1 = (Number(num1) + Number(num2)).toString();
            } else if (operator == '-') {
                num1 = (Number(num1) - Number(num2)).toString();
            } else if (operator == '*') {
                num1 = (Number(num1) * Number(num2)).toString();
            } else if (operator == '/') {
                num1 = (Number(num1) / Number(num2)).toString();
            } else if (operator == '%') {
                num1 = (Number(num1) % Number(num2)).toString();
            }
            num2 = '';
            displayScreen.value = num1;
        }
        operator = e.target.textContent;
        currentOperation.textContent = e.target.textContent;   
    } else if (e.target.textContent == '.') {
        if (displayScreen.value.includes('.'))
            return;

        if (operator == '') {
            num1 += '.';
            displayScreen.value = num1
        } else {
            num2 += '.'
            displayScreen.value = num2
        }
    } else if (e.target.textContent == '=') {
        if (operator == '' || num2 == '')
            return;

        if (operator == '+') {
            num1 = (Number(num1) + Number(num2)).toString();
        } else if (operator == '-') {
            num1 = (Number(num1) - Number(num2)).toString();
        } else if (operator == '*') {
            num1 = (Number(num1) * Number(num2)).toString();
        } else if (operator == '/') {
            num1 = (Number(num1) / Number(num2)).toString();
        } else if (operator == '%') {
            num1 = (Number(num1) % Number(num2)).toString();
        }
        currentOperation.textContent = '';
        operator = '';
        num2 = '';
        displayScreen.value = num1;
    } else if (e.target.textContent == '⌫') {
        if (num1 == '' || (num2 == '' && operator !== '')) {
            return;
        }
        else if (num2 == '' && operator == ''){
            num1 = num1.slice(0, -1);
            displayScreen.value = num1;
        }
        else {
            num2 = num2.slice(0, -1);
            displayScreen.value = num2;
        }
    } else {
        num1 = '';
        num2 = '';
        operator = '';
        displayScreen.value = '';
    }
})

document.addEventListener('keydown', e => {
    if (Number(e.key) || e.key == '0') {
        if (operator == '') {
            num1 += e.key;
            displayScreen.value = num1
        } else {
            num2 += e.key;
            displayScreen.value = num2;
        }
    } else if (['+', '-', '*', '/', '%'].includes(e.key)) {
        e.preventDefault();
        if (num1 == '')
            return;

        if (num2 !== '') {
            if (operator == '+') {
                num1 = (Number(num1) + Number(num2)).toString();
            } else if (operator == '-') {
                num1 = (Number(num1) - Number(num2)).toString();
            } else if (operator == '*') {
                num1 = (Number(num1) * Number(num2)).toString();
            } else if (operator == '/') {
                num1 = (Number(num1) / Number(num2)).toString();
            } else if (operator == '%') {
                num1 = (Number(num1) % Number(num2)).toString();
            }
            num2 = '';
            displayScreen.value = num1;
        }
        operator = e.key;
        currentOperation.textContent = e.key;   
    } else if (e.key == '.') {
        if (displayScreen.value.includes('.'))
            return;

        if (operator == '') {
            num1 += '.';
            displayScreen.value = num1
        } else {
            num2 += '.'
            displayScreen.value = num2
        }
    } else if (e.key == '=' || e.key == 'Enter') {
        if (operator == '' || num2 == '')
            return;

        if (operator == '+') {
            num1 = (Number(num1) + Number(num2)).toString();
        } else if (operator == '-') {
            num1 = (Number(num1) - Number(num2)).toString();
        } else if (operator == '*') {
            num1 = (Number(num1) * Number(num2)).toString();
        } else if (operator == '/') {
            num1 = (Number(num1) / Number(num2)).toString();
        } else if (operator == '%') {
            num1 = (Number(num1) % Number(num2)).toString();
        }
        currentOperation.textContent = '';
        operator = '';
        num2 = '';
        displayScreen.value = num1;
    } else if (e.key == 'Backspace') {
        if (num1 == '' || (num2 == '' && operator !== '')) {
            return;
        }
        else if (num2 == '' && operator == ''){
            num1 = num1.slice(0, -1);
            displayScreen.value = num1;
        }
        else {
            num2 = num2.slice(0, -1);
            displayScreen.value = num2;
        }
    } else if (e.key.toLowerCase() == 'c') {
        num1 = '';
        num2 = '';
        operator = '';
        displayScreen.value = '';
    }
})