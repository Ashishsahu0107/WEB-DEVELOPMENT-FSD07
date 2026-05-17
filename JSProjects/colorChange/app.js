const previewSection = document.getElementById("bgChange");
const headingText = document.getElementById("heading");
const paragraphText = document.getElementById("paragraph");

function updateBackgroundColor() {
    const color = document.getElementById("colorbg").value;
    previewSection.style.backgroundColor = color;
}

function updateHeadingColor() {
    const color = document.getElementById("colorheading").value;
    headingText.style.color = color;
}

function updateParagraphColor() {
    const color = document.getElementById("colorpara").value;
    paragraphText.style.color = color;
}

function resetColors() {
    document.getElementById("colorbg").value = "#ffffff";
    document.getElementById("colorheading").value = "#1f2937";
    document.getElementById("colorpara").value = "#4b5563";

    updateBackgroundColor();
    updateHeadingColor();
    updateParagraphColor();
}

document.getElementById("colorbg").addEventListener("input", updateBackgroundColor);
document.getElementById("colorheading").addEventListener("input", updateHeadingColor);
document.getElementById("colorpara").addEventListener("input", updateParagraphColor);
document.getElementById("resetBtn").addEventListener("click", resetColors);

resetColors();
