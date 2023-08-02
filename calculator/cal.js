
let displayValue = "";

function addToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function updateDisplay() {
    let display = document.getElementById("display");
    display.value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function deleteFromDisplay() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        let result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
    }
}

