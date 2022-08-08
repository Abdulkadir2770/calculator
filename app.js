// retrieved elements
const display = document.querySelector("#display-field");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const equal = document.querySelector(".equal");


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
    return `${num1} ${operator} ${num2}`;
}

console.log(operation("+", 2, 4));

let displayValue;

const populateDisplay = () => {
    // numbers
    numbers.forEach((number) => {
        number.addEventListener("click", (e) => {
            displayValue = display.textContent = e.target.textContent;
        })
    })

    // operator
    operators.forEach((operator) => {
        operator.addEventListener("click", (e) => {
            display.textContent = e.target.textContent;
        })
    })

    //equal button
    equal.addEventListener("click", (e) => {
        display.textContent = e.target.textContent;
    })

    // clear button
    clearBtn.addEventListener("click", () => {
        display.textContent = 0;
    })
}

populateDisplay();

// a function that evaluates expressions & displays the results on the screen
const evaluate = () => {
    // figure out how to turn a string char into a number

    // reject none number characters
}