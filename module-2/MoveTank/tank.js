var image = document.getElementById("image");

document.onkeydown = checkKey;

var wheelrotation = 0
var leftright = 0
var updown = 0

function checkKey(e) {
	console.log("key nr = " + e.keyCode);
    e = e || window.event;
    if(e.keyCode == 32){
    	console.log("spacebar");
    } else if (e.keyCode == '38') {  // up arrow
        image.style.transform = "rotate(0deg)"
        console.log("Up arrow");
        image.style.backgroundPosition = `${wheelrotation = wheelrotation + 84}px 0px`; // check goed de rupsband
        image.style.marginTop =  `${updown = updown - 10}px`;

    } else if (e.keyCode == '40') { // down arrow
        console.log("down arrow");
        image.style.transform = "rotate(180deg)"
        image.style.backgroundPosition = `${wheelrotation = wheelrotation + 84}px 0px`; // check goed de rupsband
        image.style.marginTop =  `${updown = updown + 10}px`;

    } else if (e.keyCode == '37') { // left arrow
    	console.log("left arrow");
        image.style.transform = "rotate(-90deg)"
        image.style.backgroundPosition = `${wheelrotation = wheelrotation + 84}px 0px`; // check goed de rupsband
        image.style.marginLeft =  `${leftright = leftright - 10}px`;
    } else if (e.keyCode == '39') {   // right arrow
        image.style.transform = "rotate(90deg)"
    	console.log("right arrow");
    	image.style.backgroundPosition = `${wheelrotation = wheelrotation + 84}px 0px`; // check goed de rupsband
        image.style.marginLeft =  `${leftright = leftright + 10}px`;
    }
}
