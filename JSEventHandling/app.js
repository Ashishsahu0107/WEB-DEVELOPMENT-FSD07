function bulbOn() {
    let bulbon = document.getElementById("bulb");
    let result = document.getElementById("bulb");
    bulbon.style.backgroundColor = "orange";
    result.innerText = "Bulb On";
}


function bulbOff() {
    let bulbOff = document.getElementById("bulb");
    let result = document.getElementById("bulb");
    bulbOff.style.backgroundColor = "white";
    result.innerText = "Bulb Off";
}

function bulbred() {
    let bulbred = document.getElementById("bulb");
    let result = document.getElementById("bulb");
    bulbred.style.backgroundColor = "red";
    result.innerText = "Stop";
}



function bulbgreen() {
    let bulbgreen = document.getElementById("bulb");
    let result = document.getElementById("bulb");
    bulbgreen.style.backgroundColor = "green";
    result.innerText = "Start";
}


function bulbyellow() {
    let bulbyellow = document.getElementById("bulb");
    let result = document.getElementById("bulb");
    bulbyellow.style.backgroundColor = "yellow";
    // bulbyellow.style.color = "black";
    result.innerText = "Ready to Go";
}



function changeColor() {
    let color = document.getElementById("changeColor").value;
    document.getElementById("bulb").style.backgroundColor = color;
}

document.getElementById("changeColor").addEventListener("change", changeColor)

