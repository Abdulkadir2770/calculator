// retrieved elements
const display = document.querySelector("#display-field");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");

// operators 
const add = () => {
    return "+";
}

const subtract = () => {
    return "-";
}

const multiply = () => {
    return "*";
}
const divide = () => {
    return "/";
}

// operation
const operation = (operator, num1, num2) => {
    
}

const populateDisplay = () => {
    let displayValue;

    numbers.forEach((number) => {
        number.addEventListener("click", (e) => {
            display.textContent = e.target.innerText;
        })
    })
}

populateDisplay();

// a function that evaluates expressions & displays the results on the screen
const evaluate = () => {
    // figure out how to turn a string char into a number

    // reject none number characters
}