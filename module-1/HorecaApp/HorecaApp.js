const PRIJS_FRIS = 2.00;
const PRIJS_BIER = 2.50;
const PRIJS_WIJN = 3.00;
var bonnetje = [];

while (true) {
    let product = prompt("Welk product wil je toevoegen? (of typ 'stop' om te stoppen)");
    if (product == "stop") {
        break;
    } else {
        if (product !== "fris" && product !== "bier" && product !== "wijn") {
            alert("Dit ken ik niet.");
        } else {
            let aantal = prompt("Hoeveel " + product + " wil je hebben?");
            let gevonden = false;
            for (var i = 0; i < bonnetje.length; i++) {
                if (bonnetje[i].product == product) {
                    bonnetje[i].aantal = parseInt(bonnetje[i].aantal) + parseInt(aantal);
                    gevonden = true;
                    break;
                }
            }
            if (!gevonden) {
                bonnetje.push({ product: product, aantal: aantal });
            }
            alert(aantal + " " + product + " is toegevoegd aan het bonnetje.");
        }
    }
}

if (bonnetje.length > 0) {
    var bonnetjeOutput = "Bonnetje:<br>";
    var totaalprijs = 0;
    for (var i = 0; i < bonnetje.length; i++) {
        var product = bonnetje[i].product;
        var aantal = bonnetje[i].aantal;
        var prijs = 0;
        if (product === "fris") {
            prijs = PRIJS_FRIS;
        } else if (product === "bier") {
            prijs = PRIJS_BIER;
        } else if (product === "wijn") {
            prijs = PRIJS_WIJN;
        }
        var productTotaal = prijs * aantal;
        bonnetjeOutput += aantal + " " + product + " (" + prijs.toFixed(2) + " euro/stuk) = " + productTotaal.toFixed(2) + " euro<br>";
        totaalprijs += productTotaal;
    }
    bonnetjeOutput += "Totaal: " + totaalprijs.toFixed(2) + " euro";
    document.getElementById("output").innerHTML = bonnetjeOutput;
}