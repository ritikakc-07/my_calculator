let display = document.getElementById("display");


function addNumber(number) {
    display.value = display.value + number;
}


function clearDisplay() {
    display.value = "";
}


function deleteNumber() {
    display.value = display.value.slice(0, -1);
}


function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}