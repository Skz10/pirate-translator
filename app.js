var inpText = document.querySelector("#inp-text");
var btnTranslate = document.querySelector("#btn-translate");
var outText = document.querySelector("#out-text");

var serverurl = "https://api.funtranslations.com/translate/pirate.json";

function urlgenerator(text){
    return serverurl + "?" + "text=" + text;
}

btnTranslate.addEventListener("click", clickHandler);

function clickHandler(){
    var textinp = inpText.value;

    fetch(urlgenerator(textinp))
    .then(response => response.json())
    .then(json => 
        {
            outText.innerText = json.contents.translated;
        })
    .catch(errorHandker)
}

function errorHandker(error){
    console.log("your error is " + error);
}