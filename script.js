let display = document.getElementById("display");

// Add number to display
function addNumber(number) {
    display.value = display.value + number;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last number
function deleteNumber() {
    display.value = display.value.slice(0, -1);
}

// Calculate answer
function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}