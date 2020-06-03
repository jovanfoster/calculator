// clears the display 
function clear(){
    display.textContent = '';
}

// declaring some DOM variables
const display = document.querySelector('.display')
const clr = document.querySelector('#clr')
const equals = document.querySelector('#equals')

const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => btn.addEventListener('click', e => {
    display.textContent += e.target.textContent;
}));

clr.addEventListener('click', () => clear());

equals.addEventListener('click', () => {
    display.textContent = eval(display.textContent.replace('=', ''));
});