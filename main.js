let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
let button5 = document.getElementById('button5');
let button6 = document.getElementById('button6');
let button7 = document.getElementById('button7');
let button8 = document.getElementById('button8');
let button9 = document.getElementById('button9');
let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMultiply = document.getElementById('buttonMultiply');
let buttonDivide = document.getElementById('buttonDivide');
let buttonEquals = document.getElementById('buttonEquals');

let allbuttons = document.querySelectorAll('.calc-button');

let currentInput = "";

let display = document.querySelector('h2');

let wasCleared = false;
let errorShown = false;

for (let buttons of allbuttons) {
    buttons.addEventListener('click', function() {
        let value = this.getAttribute('data-value');
        
        if (wasCleared || errorShown) {
            currentInput = ""; 
            display.textContent = ""; 
            wasCleared = false;
            errorShown = false; 
        }
        

        if (value === '=') {
            try {
                currentInput = eval(currentInput).toString(); 
                display.textContent = currentInput;
            } catch (error) {
                currentInput = "Error";
                display.textContent = currentInput;
                errorShown = true;
            }
        }
        
        else if (value === 'C') { 
            try {
                currentInput = "Input cleared";
                display.textContent = currentInput;
                wasCleared = true;
            } catch (error) {
                currentInput = "Error";
                display.textContent = currentInput;
                errorShown = true;
            }
        }
        
        else {
        currentInput += value;                         
        display.textContent = currentInput;
        }   
    });
}

