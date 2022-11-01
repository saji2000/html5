var helpArray = [ "Enter your name in this input box.",
  "Enter your e-mail address in the format user@domain.",
  "Check this box if you liked our site.",
  "Enter any comments here that you'd like us to read.",
  "This button submits the form to the server-side script.",
  "This button clears the form.", "" ];
var helpText;

function init() {
    helpText = document.getElementById("helpText");

    register.Listeners(document.getElementById("name"), 0);
    register.Listeners(document.getElementById("email"), 1);
    register.Listeners(document.getElementById("like"), 2);
    register.Listeners(document.getElementById("comments"), 3);
    register.Listeners(document.getElementById("submit"), 4);
    register.Listeners(document.getElementById("reset"), 5);

}

function registerListeners(object, messageNumber){
    object.addEventListener("focus", function(){
        helpText.innerHTML = helpArray[messageNumber];}, false);

    object.addEventListener("blur", function(){
        helpText.innerHTML = helpArray[6];}, false);
}

window.addEventListener("load", init, false);