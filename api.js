document.getElementById("getButton").addEventListener("click", getJoke);

function getJoke(){
    var myRequest = new XMLHttpRequest();

    myRequest.addEventListener("load", onResponse);
    myRequest.addEventListener("error", onError);

    myRequest.open("GET", "https://api.chucknorris.io/jokes/random");
    myRequest.send();
}

function onResponse(e){
    var myRequestAsText = e.srcElement.response;
    console.log(myRequestAsText);

    var myResponseAsAJSON = JSON.parse(myRequestAsText);
    console.log(myResponseAsAJSON.value);

}

function onError(e){
    console.log(e)

}
