function tickle(image) {
    image.src = "images/assets/dk2.png";
}
function leave(image) {
    image.src = "images/assets/dk.gif";
}

function hoverEmail(image) {
    image.src = "images/assets/email2.png";
}
function leaveEmail(image) {
    image.src = "images/assets/email.png";
}

function hoverLinkedIn(image) {
    image.src = "images/assets/linkedin2.png";
}
function leaveLinkedIn(image) {
    image.src = "images/assets/linkedin.png";
}

function hoverGitHub(image) {
    image.src = "images/assets/github2.png";
}
function leaveGitHub(image) {
    image.src = "images/assets/github.png";
}

function clickAdi(image) {
    var state = 0;
    switch (state) {
        case 0:
            image.src = "images/assets/adi.jpg";
            state = 1;
        case 1:
            image.src = "images/assets/qr.jpg";
            state = 0;
    }
}