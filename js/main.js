function setRandomColor(v) {
    document.querySelector(':root').style.setProperty(v, 'hsl(' + Math.floor(Math.random() * 360) + ', 90%, 70%)');
}

setRandomColor("--bg")
var state = -1;
function navToggle() {
    var navBar = document.getElementById("navBar");
    var navToggle = document.getElementById("navToggle");
    if (state == -1) {
        navBar.style.width = "10rem";
        navToggle.style.background = "var(--glass)";
    } else {
        navBar.style.width = "0";
        navToggle.style.background = "var(--background)";
    }
    state *= -1;
}

function scrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



function destroyTilt() {
    var tiltElements = document.querySelectorAll(`[data-tilt]`);
    var mq = window.matchMedia("(max-width: 1000px)");
    if (mq.matches) {
        for (var i = 0, len = tiltElements.length; i < len; i++) {
            tiltElements[i].vanillaTilt.destroy();
        }
    }
}
destroyTilt();
