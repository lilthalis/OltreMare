// REGION SELECT

function selectRegion(region){

    // FADE OUT SUAVE

    document.body.style.transition = "opacity 0.6s ease";

    document.body.style.opacity = "0";

    setTimeout(() => {

        // REDIRECT

        if(region === "br"){

            window.location.href = "br.html";

        }

        else{

            window.location.href = "global.html";

        }

    }, 600);

}

/* ============================
   CINEMATIC PARALLAX
============================ */

const heroImage = document.querySelector('.hero-image img');

if(heroImage){

    window.addEventListener('mousemove', (e) => {

        const x =
        (window.innerWidth / 2 - e.clientX) / 80;

        const y =
        (window.innerHeight / 2 - e.clientY) / 80;

        heroImage.style.transform =
        `translate(${x}px, ${y}px) scale(1.02)`;

    });

}

/* ============================
   NAVBAR TRANSPARENCY
============================ */

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(245,245,242,.92)";

        navbar.style.backdropFilter =
        "blur(24px)";

    }

    else{

        navbar.style.background =
        "rgba(245,245,242,.75)";

    }

});

/* ============================
   PAGE FADE IN
============================ */

window.addEventListener('load', () => {

    document.body.style.opacity = "1";

});