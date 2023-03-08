const aantal = parseInt(prompt("Welk cijfer wil je voor je cijferruit?"));
let htmlOutput = "";

let list = "";
for (let i = 1; i <= aantal; i++) {
  list += i;
  htmlOutput += "<p>" + list.padStart(aantal - Math.floor((aantal - i) / 2), " ").padEnd(aantal, " ") + "</p>";
}

for (let i = 1; i <= aantal; i--) {
    list -= i;
    htmlOutput += "<p>" + list.padStart(aantal - Math.floor((aantal - i) / 2), " ").padEnd(aantal, " ") + "</p>";
  }

document.getElementById("output").innerHTML = htmlOutput;
