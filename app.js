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
    // use built-in function constructor to safelt evalutes the expression
    try {
        const result=Function(`'use strict';return (${output.value});`)();
        if(isNaN(result) || isFinite(result)){
            output.value="Error";
        }
        else{
            output.value=result;
        }
    }
    catch (e) {
        output.value = "Error"
    }
}

