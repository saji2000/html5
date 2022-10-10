var input1 = window.prompt("Enter first number: ", "0");
var input2 = window.prompt("Enter second number: ", "0");
var input3 = window.prompt("Enter third number: ", "0");

var value1 = parseFloat(input1);
var value2 = parseFloat(input2);
var value3 = parseFloat(input3);

var values = [value1, value2, value3];

var maxValue = maximum(value1, value2, value3);

for(var x = 1; x <= values.length; x++){
    document.writeln("<p>Number #" + x + 
    " is " + values[x-1] + "</p>");
}

document.writeln("<p>Maximum number is " + maxValue);

function maximum(a, b, c){
    return Math.max(a, Math.max(b, c));
}


