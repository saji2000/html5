var output = "";

function calculateFactorials(){
    for(var i=0; i <= 10; ++i){
        output += "<p>" + i + "! = " + factorial(i) + "</p>";

        document.getElementById("results").innerHTML = output;
    }
}

function factorial(n){
    if(n <= 1){
        return 1;
    }
    else{
        return n * factorial(n - 1);
    }
}
window.addEventListener("load", calculateFactorials, false);

