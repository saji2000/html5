function start(){
    var current = new Date();

    document.getElementById("strings").innerHTML = 
        "<p>toString: " + current.toString() + "</p>" +
        "<p>toLocaleString: " + current.toLocaleString() + "</p>";

    document.getElementById("getMethods").innerHTML = 
        "<p>getDate: " + current.getDate() + "</p>" +
        "<p>getDay: " + current.getDay() + "</p>";

    var anotherDate = new Date(2011, 2, 18, 1, 5, 0 ,0);
    document.getElementById("newArguments").innerHTML = 
        "<p>Date: " + anotherDate + "</p>";

    anotherDate.setDate(31);
    anotherDate.setMonth(11);

    document.getElementById("setMethods").innerHTML = 
        "<p>Modified date: " + anotherDate + "</p>";
}
window.addEventListener("load", start, false);