var cleanTheme = document.getElementById("cleanTheme")
var ogTheme = document.getElementById("ogTheme")
var flipstate = 1
var bod = document.getElementById("body")
var egg = document.getElementById("easter-egg")

function swapStyleSheet(sheet) {
    document.getElementById("baseStyle").setAttribute("href", sheet);
}

function flip() {
    if (flipstate == 1) {
        cleanTheme.style.display = "none";
        ogTheme.style.display = "";
        bod.style.background = "#c0c0c0";
        egg.style.bottom = "4px";
        egg.style.right = "4px";
        swapStyleSheet("https://unpkg.com/98.css")
    } else {
        ogTheme.style.display = "none";
        cleanTheme.style.display = "";
        bod.style.background = "var(--bg)";
        egg.style.bottom = "-4px";
        egg.style.right = "-4px";
        swapStyleSheet("https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css")
    }
    flipstate *= -1
}