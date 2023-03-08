let aantal = Number(prompt('Hoeveel getallen wil je in de ruit?')) + 2;
let ruit = '';

for (let i = 0; i < aantal; i++) {
  let getallen = [];
  for (let j = 1; j < i; j++) {
    getallen.push(j);
  }
  if (getallen.length > 0) {
    ruit += getallen.join('-') + '\n';
  }
}

let omgekeerderuit = ruit.split('\n');
omgekeerderuit.pop(0)
omgekeerderuit.pop(0)
let x = omgekeerderuit.reverse().join('\n');
ruit += x;

const ruitTekst = document.createElement('pre');
ruitTekst.innerText = ruit;
document.body.appendChild(ruitTekst);