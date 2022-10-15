function split(){
    var inputString = document.getElementById("inputField").value;
    var tokens = inputString.split(" ");

    var results = document.getElementById("results");

    results.innerHTML = "<p>The sentence split into words is: </p>" + 
    "<p class = 'indent'>" + 
    tokens.join("</p><p class = 'indet'>") + "</p>" + 
    "<p>The first 10 characters of the input string are : </p>" + 
    "<p class = 'indent'>'" +inputString.substring(0, 10) + "'</p>";
}

function start(){
    var searchButton = document.getElementById("splitButton");
    searchButton.addEventListener("click", split, false);
}
window.addEventListener("load", start, false);