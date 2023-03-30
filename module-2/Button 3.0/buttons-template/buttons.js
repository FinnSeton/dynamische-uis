var aantalbtns = 30;
const kleuren = ['green', 'red', 'purple', 'blue', 'black'];

for (var i = 1; i <= aantalbtns; i++) {
  var btn = document.createElement("BUTTON");
  var t = document.createTextNode(i);
  btn.appendChild(t);
  btn.style.backgroundColor = "green";
  btn.style.width = "200px";
  btn.style.height = "100px";
    

    btn.addEventListener("click", function() {
  	  document.body.appendChild(btn);
      if (this.style.backgroundColor == kleuren[3]) {
        this.style.backgroundColor = kleuren[4];
        console.log('zwart')
    
      }
      
  
      
    });
    
    
  }
