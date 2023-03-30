var btn = document.createElement("BUTTON");
var tekst = document.createTextNode("test");
var buttontekst = "Welkom Finn Seton"
btn.appendChild(tekst);
btn.onclick = function() {onclick()};

function onclick() {
    if (document.getElementsByTagName('h1')[0].innerHTML == buttontekst) {btn.remove()}
    else if (document.getElementsByTagName('h1')[0].innerHTML = "Welkom") {document.getElementsByTagName('h1')[0].innerHTML = buttontekst;} 
}
document.body.appendChild(btn);