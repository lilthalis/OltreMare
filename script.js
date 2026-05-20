// script.js

const reveals = document.querySelectorAll('.reveal');

function revealOnScroll(){

  reveals.forEach(element => {

    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){
      element.classList.add('active');
    }

  });

}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();


// cinematic smooth scroll feeling

document.querySelectorAll('button').forEach(button => {

  button.addEventListener('mouseenter', () => {

    button.style.transform = 'translateY(-2px)';

  });

  button.addEventListener('mouseleave', () => {

    button.style.transform = 'translateY(0px)';

  });

});


// subtle parallax on hero image

const houseImage = document.querySelector('.house-image');

window.addEventListener('mousemove', (e) => {

  const x = (window.innerWidth / 2 - e.pageX) / 90;
  const y = (window.innerHeight / 2 - e.pageY) / 90;

  houseImage.style.transform =
    `translate(${x}px, ${y}px) scale(1.01)`;

});

function selectRegion(region){

    document.body.style.opacity = "0";

    setTimeout(() => {

        if(region === "br"){
            window.location.href = "br.html";
        }

        else{
            window.location.href = "global.html";
        }

    }, 500);

}