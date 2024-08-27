const text = document.querySelector("#text");
const btnEncrypt = document.querySelector("#encrypt");
const nomessages = document.querySelector(".no-messages-found");
const textresult = document.querySelector("#text-result");

// a == alu
// e == ra
// i == cod
// o == chl
// u == nge
// r == jvns
function encrypt() {
    let newText = text.value;
    newText = newText.replace('a', 'alu');
    newText = newText.replace('e', 'ra');
    newText = newText.replace('i', 'cod');
    newText = newText.replace('o', 'chl');
    newText = newText.replace('u', 'nge');
    nomessages.style.display = 'none'
    textresult.style.display = "inline"
    textresult.innerHTML = newText;
}

function decrypt() {
    let newText = text.value;
    newText = newText.replace('alu', 'a')
    newText = newText.replace('ra', 'e')
    newText = newText.replace('cod', 'i')
    newText = newText.replace('chl', 'o')
    newText = newText.replace('nge', 'u')
    nomessages.style.display = 'none'
    textresult.style.display = "inline"
    textresult.innerHTML = newText;
}