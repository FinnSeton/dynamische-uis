let buttonValues = [0, 0, 0];

function buttonClicked(buttonIndex) {
  if (buttonIndex == 1) {
    buttonValues[buttonIndex - 1] += 1
    document.getElementById('button1').style.backgroundColor = "red";
    document.getElementById('button2').style.backgroundColor = "green";
    document.getElementById('button3').style.backgroundColor = "green";
    document.getElementById('button1').disabled = true;
    document.getElementById('button2').disabled = false;
    document.getElementById('button3').disabled = false;
    document.getElementById('button1').innerHTML = buttonValues[buttonIndex - 1]
    document.getElementById("img1").src = "images/bg1.jpg";
    document.getElementById("img2").src = "images/1.jpg";

  } else if (buttonIndex == 2) {
    buttonValues[buttonIndex - 1] += 1
    document.getElementById('button1').style.backgroundColor = "green";
    document.getElementById('button2').style.backgroundColor = "red";
    document.getElementById('button3').style.backgroundColor = "green";
    document.getElementById('button1').disabled = false;
    document.getElementById('button2').disabled = true;
    document.getElementById('button3').disabled = false;
    document.getElementById('button2').innerHTML = buttonValues[buttonIndex - 1]
    document.getElementById("img1").src = "images/bg2.jpg";
    document.getElementById("img2").src = "images/2.jpg";
  } else if (buttonIndex == 3) {
    buttonValues[buttonIndex - 1] += 1
    document.getElementById('button1').style.backgroundColor = "green";
    document.getElementById('button2').style.backgroundColor = "green";
    document.getElementById('button3').style.backgroundColor = "red";
    document.getElementById('button1').disabled = false;
    document.getElementById('button2').disabled = false;
    document.getElementById('button3').disabled = true;
    document.getElementById('button3').innerHTML = buttonValues[buttonIndex - 1]
    document.getElementById("img1").src = "images/bg3.jpg";
    document.getElementById("img2").src = "images/3.jpg";
  }
}