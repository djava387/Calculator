// creating constants for elements
const calcDis = document.querySelector("h1");
// targetting  all button elements i.e returns array of all the buttons 
const inputButtons = document.querySelectorAll ("button");
const clearButton =  document.getElementById ("clear-btn");

let firstInput =0;
let operatorValue ='';
let nextValue = false;

//console logging  parameters to be passed from evenlistenners
 const inputNumberValue = (number) =>{
// console.log(number);
// calcDis.textContent = number;
// add numbers together except when number is 0
if(nextValue ===true) {
    calcDis.textContent = number;
    nextValue = false;
} else{
    const disValue = calcDis.textContent;
    calcDis.textContent = disValue === '0' ? number :  disValue + number;
}

}
const inputDecimal =() =>{
    // if user has clicked the operator, block decimal
    if (nextValue ===true) return;
    // if there is no decimal, add one
    if (!calcDis.textContent.includes('.')){
        calcDis.textContent =   `${calcDis.textContent}.`;
    }

}
//calculating first and second values based on the corresponding opeartor
const calculate = {
    '/': (firstNumber, secondNumber) => firstNumber / secondNumber,
    '*': (firstNumber, secondNumber) => firstNumber * secondNumber,
    '+': (firstNumber, secondNumber) => firstNumber + secondNumber,
    '-': (firstNumber, secondNumber) => firstNumber - secondNumber,
    '=': (firstNumber, secondNumber) => secondNumber,
}
const funcOperator=(operator)=> {
const currentValue = Number(calcDis.textContent);
//block multiple operators
if(operatorValue && nextValue) {
    operatorValue = operator;
    return;
}

//the first value is assigned if there is no other value
if(!firstInput) {
    firstInput = currentValue;
    // operatorValue = operator;
} else{
    // console.log (firstInput, operatorValue, currentValue);
    const  calculation = calculate[operatorValue](firstInput, currentValue);
    calcDis.textContent = calculation;
    // console.log('calculation', calculation);
    firstInput = calculation;
}
nextValue = true;
operatorValue = operator;
// console.log( 'firstInput', firstInput);
// console.log ('opeartor', operatorValue);
}
// console.log(inputButton);
//creating eventlistenners for all the buttons i.e numbers, decimal, operators
 //running a function for each item within array inputButtons
inputButtons.forEach((inputButton) => {
    //using conditional statements to get the right buttons
    if(inputButton.classList.length ===0) {
        inputButton.addEventListener('click', () =>inputNumberValue(inputButton.value));
    }  else if (inputButton.classList.contains('operator')){
        inputButton.addEventListener('click', () =>funcOperator(inputButton.value));
    }  else if (inputButton.classList.contains('decimal')){
        inputButton.addEventListener('click',() => inputDecimal());
    }

});

// Clear display
const clearAll =()=> {
    firstInput =0;
    operatorValue ='';
    nextValue = false;
    calcDis.textContent ='0';
}

//Event Listener
clearButton.addEventListener('click', clearAll);



