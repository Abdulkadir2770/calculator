const display = document.querySelector("#display-field");
const buttons = Array.from(document.querySelectorAll(".buttons"));

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText) {
            case "C":
                display.innerText = "";
                break;
            case "=":
                display.innerText = eval(display.innerText);
            default:
                display.innerText = e.target.innerText;
        }
    })
})