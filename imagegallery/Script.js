var i = 0;

const cars = [
    "camss",
    "gtr",
    "hellcat",
    "lambo",
    "mcsenna",
    "mustang",
    "porgt3",
    "r8",
    "subie",
    "supra",
];

function createCarElement(direction) {

    var previousCar = document.getElementById('car-image');
    if (previousCar) {
        previousCar.remove();
    }
    
    var carName = cars[i % cars.length];
    

    var oImg = document.createElement("img");
    oImg.setAttribute('src', 'img/' + carName + '.png');
    oImg.setAttribute('height', '100px');
    oImg.setAttribute('width', '100px');
    oImg.setAttribute('id', 'car-image');
    document.body.appendChild(oImg);
    
    if (direction == "next") {
        i++;  
    }
    else if  (direction == "prev") {
        i--;
    }
    
    console.log(i);
}
