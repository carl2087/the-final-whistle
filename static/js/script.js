document.addEventListener('DOMContentLoaded', function () {
    // sidenav initialization
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // material boxed initialization
    let materialboxed = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(materialboxed);

    // Modal initialization
    let elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);

    // times out the message alerts
    setTimeout(function () {
        let alert = document.getElementById('message-alert');
        fadeOut(alert);
    })

    // adds correct year to copyright in footer
    let date = (new Date().getFullYear());
    document.getElementById("copyright").innerHTML = date;

});

// scroll to top button code was sourced from W3schools

let myButton = document.getElementById("top-button");

// When the user scrolls down 600px from the top of the document, show the button
// set at 600px as only needed on mobile devices

window.onscroll = function() {scrollFunction();};

function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// function for fading out the alerts
// researched code on stack overflow and codepen

function fadeOut(fadeTarget) {
    let fadeEffect = setInterval(function() {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.01;
        } else {
            clearInterval(fadeEffect);
        }
    }, 40);
    
}