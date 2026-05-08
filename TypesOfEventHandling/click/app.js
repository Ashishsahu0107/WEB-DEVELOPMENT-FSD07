document.getElementById("redbox").addEventListener("mouseover", fillredcolor);
document.getElementById("redbox").addEventListener("mouseout", fillbasecolor);

function fillredcolor() {
    document.getElementById("bulb1").style.backgroundColor = "red";
}
function fillbasecolor() {
    document.getElementById("bulb1").style.backgroundColor = "white";
}




document.getElementById("greenbox").addEventListener("mouseover", fillgreencolor);
document.getElementById("greenbox").addEventListener("mouseout", fillgreenbasecolor);

function fillgreencolor() {
    document.getElementById("bulb1").style.backgroundColor = "green";
    document.getElementById("bulb1").innerText = "Hii i ma green";
}
function fillgreenbasecolor() {
    document.getElementById("bulb1").style.backgroundColor = "white";
    document.getElementById("bulb1").innerText = "";
}




document.getElementById("bluebox").addEventListener("mouseover", fillbluecolor);
document.getElementById("bluebox").addEventListener("mouseout", fillbluebasecolor);

function fillbluecolor() {
    document.getElementById("bulb1").style.backgroundColor = "blue";
    document.getElementById("bulb1").style.borderRadius = "50%";
}
function fillbluebasecolor() {
    document.getElementById("bulb1").style.backgroundColor = "white";
    document.getElementById("bulb1").style.borderRadius = "0%";
}




document.getElementById("inputtype").addEventListener("click", inputclick);

