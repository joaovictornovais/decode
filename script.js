const resultArea = document.querySelector(".result-area");
const noMessages = document.querySelector(".no-messages");
let resultText = document.querySelector(".result-text");

// A -> alu
// E -> ra
// I -> cod
// O -> chl
// U -> nge
function encrypt() {
    let text = document.querySelector("#text").value;
    text = text.replace(/a/g, 'al');
    text = text.replace(/e/g, 'k');
    text = text.replace(/i/g, 'cd');
    text = text.replace(/o/g, 'chl');
    text = text.replace(/u/g, 'ng');
    noMessages.style.display = 'none';
    resultArea.style.display = 'inline';
    resultText.innerHTML = text;
}

function decrypt() {
    let text = document.querySelector("#text").value;
    text = text.replace(/al/g, 'a');
    text = text.replace(/k/g, 'e');
    text = text.replace(/cd/g, 'i');
    text = text.replace(/chl/g, 'o');
    text = text.replace(/ng/g, 'u');
    noMessages.style.display = 'none';
    resultArea.style.display = 'inline';
    resultText.innerHTML = text;
}

function copy() {
    navigator.clipboard.writeText(resultText.textContent);
}