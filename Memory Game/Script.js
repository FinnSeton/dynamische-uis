var hvlkaarten = 10
var cardsnmbr = [];

for(var i = 1; i <= hvlkaarten; i++){
    cardsnmbr.push(i);
}
console.log(cardsnmbr)

let tempcards = cardsnmbr;
cardsnmbr = cardsnmbr.concat(tempcards);
cardsnmbr = shuffle(cardsnmbr);

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

cardsnmbr.forEach((element) => { cardmaker(element); });

function cardmaker(cardname) {
    const button = document.createElement('button');
    button.innerText = cardname;
    button.id = cardname+"btn";
    document.getElementById("cards").appendChild(button);
}
