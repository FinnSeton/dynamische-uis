var hvlkaarten = 10;
var usdcards = [];
var cardsnmbr = [];
var selectedCardButton;
var cardnameid;
var selectedCardButtonold;

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

function clickcard(cardnameid) {
    selectedCardButton = document.getElementById(cardnameid + "btn");

    if (selectedCardButton.innerText !== "" || selectedCardButton.disabled) {
        return;
    }

    if (selectedCardButtonold) {
        selectedCardButtonold.innerText = "";
    }

    selectedCardButton.innerText = cardnameid;
    console.log(selectedCardButton.innerText);

    if (selectedCardButtonold && selectedCardButtonold !== selectedCardButton) {
        var correspondingCardId = selectedCardButtonold.id.replace(".1", ".2");
        var correspondingCardButton = document.getElementById(correspondingCardId);

        if (correspondingCardButton.innerText === cardnameid) {
            selectedCardButtonold.disabled = true;
            selectedCardButton.disabled = true;
            correspondingCardButton.disabled = true;
        } else if(correspondingCardButton.innerText !== cardnameid) {
            setTimeout(function () {
                selectedCardButton.innerText = "";
                correspondingCardButton.innerText = "";
            }, 500);
        }

        selectedCardButtonold = null;
    } else {
        selectedCardButtonold = selectedCardButton;
    }
}

var countMap = [];
cardsnmbr.forEach((element) => {
    countMap[element] = (countMap[element] || 0) + 1;
    cardmaker(element, countMap[element]);
});

function cardmaker(cardname, count) {
    if (count > 1) {
        var cardnameid = cardname + ".2";
    } else {
        var cardnameid = cardname + ".1";
    }

    const button = document.createElement('button');
    button.onclick = function () {
        clickcard(cardnameid);
    };
    button.id = cardnameid + "btn";
    button.style.width = "130px";
    button.style.height = "200px";
    var div = document.getElementById("cards");

    div.appendChild(button);
}

const unselectButton = document.createElement('button');
unselectButton.onclick = function () {
    if (selectedCardButtonold) {
        selectedCardButtonold.innerText = "";
        selectedCardButtonold = null;
    }
};
unselectButton.innerText = "Unselect";
var div = document.getElementById("cards");
div.appendChild(unselectButton);
