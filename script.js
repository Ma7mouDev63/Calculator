function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return Math.round(num1 / num2 * 100) / 100;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
    }
}

//Okay So I will create a function that takes in the textContent
//Of the number button that was pressed and that text to the display
let display = document.querySelector('#display');

const numBtns = document.querySelectorAll('.number');
numBtns.forEach((btn) => {
    btn.addEventListener('click', ()=> {
        popToDisplay(btn.textContent);
    });
});

function popToDisplay(btnTxt) {
    display.textContent += btnTxt;
}