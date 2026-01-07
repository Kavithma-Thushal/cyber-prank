let progress = 0;

const loader = setInterval(() => {
    if (progress < 100) {
        progress += 1;
        $(".progress-bar").css("width", progress + "%");
    }

    if (progress === 100) {
        clearInterval(loader);

        setTimeout(() => {
            $("#overlay").fadeOut(1000);
        }, 500);
    }
}, 120);

const lines = [
    "Initializing breach protocol...",
    "Bypassing firewall...",
    "Access granted ✔",
    "Extracting user data...",
    "IP Address: 192.168.1.23",
    "Location: Colombo, Sri Lanka",
    "Accessing CCTV feeds...",
    "Injecting payload...",
    "SYSTEM CONTROL ACHIEVED",
    "WARNING: USER AWARENESS LOW"
];

let i = 0;
let j = 0;
let currentLine = "";
const speed = 40;

function typeCode() {
    if (i < lines.length) {
        if (j < lines[i].length) {
            currentLine += lines[i][j];
            $("#code").text(currentLine);
            j++;
        } else {
            currentLine += "\n";
            j = 0;
            i++;
        }
        setTimeout(typeCode, speed);
    }
}

$(document).ready(function () {
    setTimeout(typeCode, 3500);
});