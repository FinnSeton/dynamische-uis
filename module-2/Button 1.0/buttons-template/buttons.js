let buttonValues = [0, 0, 0];

function buttonClicked(buttonIndex) {
  if (buttonIndex == 1) {
    buttonValues[buttonIndex - 1] += 1
    document.getElementById('button1').innerHTML = buttonValues[buttonIndex - 1]
    document.getElementById("img1").src = "images/bg1.jpg";
    document.getElementById("img2").src = "images/1.jpg";

  } else if (buttonIndex == 2) {
    buttonValues[buttonIndex - 1] += 1
    document.getElementById('button2').innerHTML = buttonValues[buttonIndex - 1]
    document.getElementById("img1").src = "images/bg2.jpg";
    document.getElementById("img2").src = "images/2.jpg";
  } else if (buttonIndex == 3) {
    buttonValues[buttonIndex - 1] += 1
    document.getElementById('button3').innerHTML = buttonValues[buttonIndex - 1]
    document.getElementById("img1").src = "images/bg3.jpg";
    document.getElementById("img2").src = "images/3.jpg";
  }
}