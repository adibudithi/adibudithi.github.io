function tickle(image) {
    image.src = "/assets/images/dk2.png";
}
function leave(image) {
    image.src = "/assets/images/dk.gif";
}

function hoverEmail(image) {
    image.src = "/assets/images/email2.png";
}
function leaveEmail(image) {
    image.src = "/assets/images/email.png";
}

function hoverLinkedIn(image) {
    image.src = "/assets/images/linkedin2.png";
}
function leaveLinkedIn(image) {
    image.src = "/assets/images/linkedin.png";
}

function hoverGitHub(image) {
    image.src = "/assets/images/github2.png";
}
function leaveGitHub(image) {
    image.src = "/assets/images/github.png";
}

var state = 0;

function clickAdi(image) {
    switch (state) {
        case 0:
            image.src = "/assets/images/qr.jpg";
            state = 1;
            break;
        case 1:
            image.src = "/assets/images/adi.jpg";
            state = 0;
            break;
    }
}