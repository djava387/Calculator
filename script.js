// creating constants for elements
const calcDis = document.querySelector("h1");
// targetting  all button elements i.e returns array of all the buttons 
const inputButtons = document.querySelectorAll ("button");
const clearButton =  document.getElementById ("clear-btn");
//console logging  parameters to be passed from evenlistenners
function inputNumberValue (number) {
// console.log(number);
// calcDis.textContent = number;
// add numbers together except when number is 0
const disValue = calcDis.textContent;
calcDis.textContent = disValue === '0' ? number :  disValue + number;
}

// console.log(inputButton);
//creating eventlistenners for all the buttons i.e numbers, decimal, operators
 //running a function for each item within array inputButtons
inputButtons.forEach((inputButton) => {
    //using conditional statements to get the right buttons
    if(inputButton.classList.length ===0) {
        inputButton.addEventListener('click', () =>inputNumberValue(inputButton.value));
    }  else if (inputButton.classList.contains('operator')){
        inputButton.addEventListener('click', () =>inputNumberValue(inputButton.value));
    }  else if (inputButton.classList.contains('decimal')){
        inputButton.addEventListener('click',() => inputNumberValue(inputButton.value));
    }

});



