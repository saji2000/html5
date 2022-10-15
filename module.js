var letters = "oandfoganlkabgalkgnqo"

function butttonPressed(){
    var inputField = document.getElementById("inputField");

    document.getElementById("results").innerHTML = 
        "<p>First occurrenece is located at index " + 
        letters.indexOf(inputField.value) + "</p>" + 
        "<p>Last occurrenece is located at index " + 
        letters.lastIndexOf(inputField.value) + "</p>" +
        "<p>First occurrenece from index 4 is located at index " + 
        letters.indexOf(inputField.value, 4) + "</p>" +
        "<p>Last occurrences from index 4 is located at index " + 
        letters.lastIndexOf(inputField.value, 4) + "</p>";
}

function start(){
    var searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", butttonPressed, false);
}
window.addEventListener("load", start, false);