var hvlkaarten = 10;
var usdcards = [];
var cardsnmbr = [];
var selectedCardButton;
var selectedCardButtonold;
var matchedCards = 0;
var gueses = 0;

for (var i = 1; i <= hvlkaarten; i++) {
    cardsnmbr.push(i);
}
console.log(cardsnmbr);

let tempcards = cardsnmbr.slice();
cardsnmbr = cardsnmbr.concat(tempcards);
cardsnmbr = shuffle(cardsnmbr);

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}


var countMap = [];
cardsnmbr.forEach((element) => {
    countMap[element] = (countMap[element] || 0) + 1;
    cardmaker(element, countMap[element]);
});

function cardmaker(cardname, count) {
    if (count > 1) { var cardnameid = cardname + ".2"; }
    else { var cardnameid = cardname + ".1"; }

    function clickcard(cardnameid) {
        selectedCardButton = document.getElementById(cardnameid + "btn");
    
        if (selectedCardButton.disabled) {
            return;
        }
    
        selectedCardButton.innerText = cardnameid.split(".")[0];
        selectedCardButton.style.backgroundImage = "none"; // Remove the background image
        selectedCardButton.style.backgroundColor = "white"; // Set background color to white
    
        if (selectedCardButtonold && selectedCardButtonold !== selectedCardButton) {
            var correspondingCardId = cardnameid.includes(".1") ? cardnameid.replace(".1", ".2") : cardnameid.replace(".2", ".1");
            var correspondingCardButton = document.getElementById(correspondingCardId + "btn");
    
            if (selectedCardButtonold.innerText === correspondingCardButton.innerText) {
                selectedCardButton.disabled = true;
                correspondingCardButton.disabled = true;
                selectedCardButton.innerText = cardnameid.split(".")[0];
                correspondingCardButton.innerText = cardnameid.split(".")[0];   
                selectedCardButtonold = null;
                matchedCards += 2;
                gueses++;
    
                if (matchedCards == cardsnmbr.length) {
                    setTimeout(function () { alert("Goedgedaan! Je hebt gewonnen!\nJe hebt " + gueses + " geraden"); }, 500);
                }
            } else {
                setTimeout(function () {
                    gueses++;
                    selectedCardButton.innerText = "";
                    correspondingCardButton.innerText = "";
                    selectedCardButtonold.innerText = "";
                    selectedCardButtonold.style.backgroundImage = "url('img/GetImage.png')";
                    selectedCardButton.style.backgroundImage = "url('img/GetImage.png')"; // Restore the background image
                    selectedCardButtonold.style.backgroundColor = ""; // Reset background color
                    selectedCardButtonold = null;
                }, 500);
            }
        } else {
            selectedCardButtonold = selectedCardButton;
        }
    }
    
    


    const button = document.createElement('button');
    button.onclick = function () { clickcard(cardnameid); };
    button.id = cardnameid + "btn";
    button.style.width = "130px";
    button.style.height = "200px";
    button.style.backgroundImage = "url('img/GetImage.png')";
    button.style.backgroundRepeat = "no-repeat";
    button.style.backgroundSize = "cover";
    var div = document.getElementById("cards");
    div.appendChild(button);
}