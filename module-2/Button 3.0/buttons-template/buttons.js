var aantalbtns = 30;
const kleuren = ['green', 'red', 'purple', 'blue', 'black'];

function btnloop() {
  for (var i = 1; i <= aantalbtns; i++) {
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode(i);
    btn.appendChild(t);
    btn.style.backgroundColor = "green";
    btn.style.width = "200px";
    btn.style.height = "100px";

    btn.addEventListener("click", function() {
      var currentColor = this.style.backgroundColor;
      var index = kleuren.indexOf(currentColor);
      if (index < kleuren.length - 1) {
        this.style.backgroundColor = kleuren[index + 1];
      } else {
        this.remove()
      }
    });

    document.body.appendChild(btn);
  }
}

btnloop();
