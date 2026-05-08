function colorbg() {
    let color = document.getElementById("colorbg").value;
    document.getElementById("bgChange").style.backgroundColor = color;
}

document.getElementById("colorbg").addEventListener("change", colorbg)



function colorheading() {
    let color = document.getElementById("colorheading").value;
    document.getElementById("heading").style.color = color;
}

document.getElementById("colorheading").addEventListener("change", colorheading)


function colorp() {
    let color = document.getElementById("colorpara").value;
    document.getElementById("paragraph").style.color = color;
}

document.getElementById("colorpara").addEventListener("change", colorp)


function reset() {
    window.location.reload();
}