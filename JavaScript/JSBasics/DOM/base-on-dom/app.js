// 1.

let x = document.getElementById("h1");

console.log(x.innerHTML);

//2.
function changeText() {
    document.getElementById("myText").innerText = "Text has been changed!";
}

// 3
function updateHeading() {
    document.getElementById("heading").innerText = "Welcome";
}

// 4
function readParagraph() {
    let text = document.getElementById("para").innerText;
    console.log(text);
}

// 5
function changeContent() {
    document.getElementById("box").innerText = "New Content!";
}

// 6
function changeText() {
    document.getElementById("textChange").innerText = "Changed!";
}

// 7
function changeBoth() {
    document.getElementById("h1Change").innerText = "New Heading";
    document.getElementById("pChange").innerText = "New Paragraph";
}

// 8 
console.log("Document Node:", document);
console.log("Element Node:", document.getElementById("heading"));
console.log("Text Node:", document.getElementById("heading").firstChild);

// 9
function getNestedText() {
    let text = document.querySelector("#parent #child").innerText;
    console.log(text);
}

// 10
function dynamicChange() {
    document.getElementById("dynamic").innerText = "Content Updated Dynamically!";
}
