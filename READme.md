### Milestone 1 (index.html)

Completed the first phase with index.html. Created overal claculator element with parent and child class. Created different buttons i.e at the top, 10 numbers, four operators, decimal point,clear button and equal sign

The buttons have value attribute to be passed into Javascript . The calculator has 5 rows and 1 column - the first row is for the operators, the 3 rows will be for numbers. The column will take full length vertically at far right-end for the equal sign.

### Milestone 2 (script.js)

Created Const for elements to target element. Input button const targets all the element, returning array of all the buttons which are later filtered through to make sure the right EventListenner is assigned. Created a function that console logs the parameter passed fromEventListenner. The EventListenner are dynamically created to all buttons using .querrySelectorAll. There is no class for number values, it can however be targetted using .classList and a series of conditional statements.
The default value for calculator display is 0. Implemented a function that calls inputNumberValue to console.log values of each button in the calculator display (inputButton.value) after 'click' event.

```
inputButtons.forEach((inputButton) => {
    //using conditional statements to get the right buttons
    if(inputButton.classList.length ===0) {
        inputButton.addEventListener('click', () =>inputNumberValue(inputButton.value));
    }  else if (inputButton.classList.contains('operator')){
        inputButton.addEventListener('click', () =>inputNumberValue(inputButton.value));
    }  else if (inputButton.classList.contains('decimal')){
        inputButton.addEventListener('click',() => inputNumberValue());
    }
```

Created a function that replaced the default value when 0 and also joined numbers using a ternary operator

```
// add numbers together except when number is 0
const disValue = calcDis.textContent;
calcDis.textContent = disValue === '0' ? number :  disValue + number;
```

### Milestone 3 (sript.js - decimal and clear button functionality)

Added reset functionality for clear button to reset display to 0 using a function. Added EvemtListener to call the function to reset.

```
/ Clear display
function clearAll () {
    calcDis.textContent ='0'
}

//Event Listener
clearButton.addEventListener('click', clearAll);

```

Created a new function to prevent user from having multiple decimals, using if statement to add decimal only if there is none. In order to check if there is a specific value(decimal) in a string, .include() method is used. InputDecimal is a function that checks on the display if there is a decimal point. If there is no decimal, the textContext is set to add decimal at the end of it.

```
function inputDecimal () {
    // if there is no decimal, add one
    if (!calcDis.textContent.includes('.')){
        calcDis.textContent =   `${calcDis.textContent}.`;
    }

}
```
