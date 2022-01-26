"use strict";

// Get elements
let home = document.getElementById("home");
let razor = document.getElementById("razor");
let about = document.getElementById("about");

// Get current location
let locationUrl = window.location.href;

// If current location matches, then add active class. Else add active class to home-page
if(locationUrl.includes("About", 0)){
    about.classList.add("active");
    home.classList.remove("active");
    razor.classList.remove("active");
} else if(locationUrl.includes("Razor", 0)){
    about.classList.remove("active");
    home.classList.remove("active");
    razor.classList.add("active");
} else {
    about.classList.remove("active");
    home.classList.add("active");
    razor.classList.remove("active");
}

