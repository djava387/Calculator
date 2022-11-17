### Milestone 1

Completed the first phase with index.html. Created overal claculator element with parent and child class. Created different buttons i.e at the top, 10 numbers, four operators, decimal point,clear button and equal sign

The buttons have value attribute to be passed into Javascript . The calculator has 5 rows and 1 column - the first row is for the operators, the 3 rows will be for numbers. The column will take full length vertically at far right-end for the equal sign

```
<body>
    <div class="calculator">
        <div class = "dis-calc">
            <h1>1234567890</h1>
        </div>
            <div class="button-container">
                <button class = "operator"value="+">+</button>
                <button value="-">-</button>
                <button value="*">*</button>
                <button value="/">/</button>
                <button value="7">7</button>
                <button value="8">8</button>
                <button value="9">9</button>
                <button value="4">4</button>
                <button value="5">5</button>
                <button value="6">6</button>
                <button value="1">1</button>
                <button value="2">2</button>
                <button value="3">3</button>
                <button class = "decimal" value=".">.</button>
                <button value="0">0</button>
                <button class = "clear" id="clear-btn">C</button>
                <button class = "equal operator" value="=">=</button>

            </div>
```
