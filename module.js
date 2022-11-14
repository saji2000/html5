var asyncRequest;
var ids = ["cpp", "www"];


function registerListeners() {
    var book;
    for (var i = 0; i < ids.length; ++i){
        book = document.getElementById(ids[i]);
        book.addEventListener("mouseover", switchText(ids[i]), false);
        book.addEventListener("mouseout", clearContent, false);
    }
    
}

function switchText(name){
    name = name + ".html";
    try{
        asyncRequest = new XMLHttpRequest();

        asyncRequest.addEventListener("readystatechange", stateChange, false);
        asyncRequest.open("GET", url, true);
        asyncRequest.send(null);
    }
    catch(e){
        alert("request error");
    }
}

function stateChange(){
    if(asyncRequest.readyState == 4 && asyncRequest.status == 200){
        document.getElementById("contentArea").innerHTML = asyncRequest.responseText;
    }
}

function clearContent(){
    document.getElementById("contentArea").innerHTML = "";
}

window.addEventListener("load", registerListeners, false);