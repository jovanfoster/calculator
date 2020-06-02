function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

const display = document.querySelector('.display')
const clr = document.querySelector('#clr')
const equals = document.querySelector('#equals')
const addBtn = document.querySelector('#add-Btn')
const subBtn = document.querySelector('#sub-Btn')
const multBtn = document.querySelector('#mult-Btn')
const divBtn = document.querySelector('#div-Btn')
const decimalBtn = document.querySelector('#decimal-Btn')
const numbers = document.querySelectorAll('.btn-num');

let num1, num2;

numbers.forEach((num) => num.addEventListener('click', e => {
    display.textContent += e.target.textContent;
}));

clr.addEventListener('click', () => display.textContent = '')