// document click that listens for nav links only
document.addEventListener("click", (e) => {
    const { target } = e;
    if (!target.matches("nav a")) {
        return;
    }
    e.preventDefault();
    route();
});

// object that routes url to templates
const urlRoutes = {
    404: {
        template: "/pages/404.html",
        title: "404",
        description: "page not found",
    },
    "/": {
        template: "/pages/home.html",
        title: "adi budithi",
        description: "home page",
    },
    "/about": {
        template: "/pages/about.html",
        title: "about adi",
        description: "about page",
    },
    "/contact": {
        template: "/pages/contact.html",
        title: "contact adi",
        description: "contact page",
    },
};

// function that listens for url and calls url location handler
const urlRouter = (event) => {
    event = event || window.event; // get window.event if event argument not provided
    event.preventDefault();
    // window.history.pushState(state, unused, target link);
    window.history.pushState({}, "", event.target.href);
    urlLocationHandler();
};

// async function that handles url location
const urlLocationHandler = async () => {
    const location = window.location.pathname; // get the url path

    if (location.length == 0) { // if the path length is 0, set it to primary page route
        location = "/";
    }

    const route = urlRoutes[location] || urlRoutes["404"]; // get the route object from the routes object
    const html = await fetch(route.template).then((response) => response.text()); // get the html from the template
    document.getElementById("content").innerHTML = html; // set the content of the content div to the html
    document.title = route.title;// set the title of the document to the title of the route
    document // set the description of the document to the description of the route
        .querySelector('meta[name="description"]')
        .setAttribute("content", route.description);
};

// add an event listener to the window that watches for url changes
window.onpopstate = urlLocationHandler;
// call the urlLocationHandler function to handle the initial url
window.route = urlRouter;
// call the urlLocationHandler function to handle the initial url
urlLocationHandler();