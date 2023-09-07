let output = document.getElementById("input");


function display(num) {
    // Append the number or operator to the input field
    output.value += num
}


let clearbutton = document.getElementById("AC")
clearbutton.onclick = function () {
    output.value = ""
}


function delt() {
    // remove the last charcter from input feild
    output.value = output.value.slice(0, -1)
}
function calc() {
    output.value = eval(output.value)
}
