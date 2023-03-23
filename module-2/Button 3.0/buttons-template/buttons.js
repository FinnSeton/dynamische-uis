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

      if (this.style.backgroundColor == kleuren[3]) {
        this.style.backgroundColor = kleuren[4];
        console.log('zwart')
      
      }else if (this.style.backgroundColor == kleuren[2]) {
        this.style.backgroundColor = kleuren[3];
        console.log('blauw')
      
      }else if (this.style.backgroundColor == kleuren[1]) {
        this.style.backgroundColor = kleuren[2];
        console.log('paars')
      
      }else if (this.style.backgroundColor == kleuren[0]) {
        this.style.backgroundColor = kleuren[1];
        console.log('rood')
      }else if (this.style.backgroundColor == kleuren[4]) {
        this.remove()
        console.log('rood')
      }
      
  
      
    });
    
    document.body.appendChild(btn);
  }
}


btnloop();