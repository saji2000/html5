var asyncRequest;
var ids = ["cpp", "www"];

function registerListeners() {
    var book;
    // for (var i = 0; i < ids.size(); ++i){
    book = document.getElementById(ids[0]);
    book.addEventListener("mouseover", function(){ switchText(ids[0]);}, false);
    book.addEventListener("mouseout", clearContent, false);

    book = document.getElementById(ids[1]);
    book.addEventListener("mouseover", function(){ switchText(ids[1]);}, false);
    book.addEventListener("mouseout", clearContent, false);
    // }
    // console.log()
}

function switchText(name){
    name = name + ".html";
    try{
        asyncRequest = new XMLHttpRequest();

        asyncRequest.addEventListener("readystatechange", stateChange, false);
        asyncRequest.open("GET", name, true);
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