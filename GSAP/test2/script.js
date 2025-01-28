var exit = document.querySelector('.main #close');
var menu = document.querySelector('.main .nav #menu');
var tl = gsap.timeline();


    tl.to('.menu-content', {
        right: 0,
        duration: 0.2,
    })
    
    tl.from('.menu-content h2', {
        x: 150,
        opacity: 0,
        stagger: 0.1,
    })
    
    tl.from('.menu-content #content', {
        opacity: 0,
    });
    
    tl.pause();
    
    menu.addEventListener('click', function () {
        tl.play();
    })
    
    exit.addEventListener('click', function () {
        tl.reverse();
    })








