function copyFunction(element) {
    var copyText = element.querySelector(".color-code").textContent;
    navigator.clipboard.writeText(copyText);
}

// function copyFunction() {
//     var textToCopy = document.getElementsByClassName("color-code").textContent;
//     navigator.clipboard.writeText(textToCopy);
// }
