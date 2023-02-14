let aantal = prompt("Welk cijfer wil je voor je cijferruit?");
let list = "";
for (let number = 1; number <= aantal; number++){
    list += number;
    document.getElementById("antwoord").innerText += list+ '\n';
    list = number === parseInt(aantal) ? list += "" : list += "-";
}
for (let number = aantal; number >= 1; number--) {
    list = list.replace(number, '').split("").reverse().join("").replace('-', '').split("").reverse().join("");
    document.getElementById("antwoord").innerText += list + '\n';
}