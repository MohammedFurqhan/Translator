var input = document.querySelector("#input-txt");
var btn = document.querySelector("#btn-translate");
var output = document.querySelector("#output-txt");

// var serverurl ="https://;essonfourapi.tanaypratap.repl.co/translate/yoda.json"
// var serverurl = "https://URL.mohammedfurqhan.repl.co";
var serverurl = "https://api.funtranslations.com/translate/minion.json"

function getTranslatedURL(text){
    return serverurl + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error Occured");
    alert("Something went wrong ! please try after some time");
}

function clickHandler(){
    var inputText = input.value; //taking input

    //calling server for processing
    fetch(getTranslatedURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText;
    })
        // console.log(json.contents.translated))
    // .catch(errorHandler);
}

btn.addEventListener("click" , clickHandler);