const imagesPath = "../../data/assets/images/"

function enter(img, name) {
    switch (name) {
        case "email":
            img.src = imagesPath + "email2.png"
            break
        case "linkedin":
            img.src = imagesPath + "linkedin2.png"
            break
        case "github":
            img.src = imagesPath + "github2.png"
            break
        case "dk":
            img.src = imagesPath + "dk2.png"
            break
    }
}

function leave(img, name) {
    switch (name) {
        case "email":
            img.src = imagesPath + "email.png"
            break
        case "linkedin":
            img.src = imagesPath + "linkedin.png"
            break
        case "github":
            img.src = imagesPath + "github.png"
            break
        case "dk":
            img.src = imagesPath + "dk.gif"
            break
    }
}

let state = 0;

function clickAdi(img) {
    switch (state) {
        case 0:
            img.src = imagesPath + "qr.jpg";
            state = 1;
            break;
        case 1:
            img.src = imagesPath + "adi.jpg";
            state = 0;
            break;
    }
}