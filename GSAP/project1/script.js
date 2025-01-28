
function section1_animation(){
    var tl = gsap.timeline();
    tl.from('.nav .logo, .nav .content h3, .nav .contact-button',{
        y: -30,
        opacity: 0,
        duration: 0.5,
        delay: 0.1, 
        stagger: 0.1
    })
    
    tl.from('.section1 .left-content',{
        x: -50,
        duration: 0.5,
        opacity: 0,
        stagger: 0.2,
    },'section1')
    
    tl.from('.section1 .right-content',{
        x: 500,
        duration: 1,
        opacity: 0,
        stagger: 0.2,
    },'section1')
}

function section2_animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger: '.section2',
            scroller: 'body',
            // markers: true,
            start: 'top 60%',
            end: 'top 0%',
            scrub: 0.5,
        }
    })
    
    tl2.from('.section2 .services',{
        y: -30,
        opacity: 0,
        duration: 0.1,
    })
    
    tl2.from('.section2 .container #fast-row-left-content',{
        x: -300,
        opacity: 0, 
        duration: 0.2
    },'fast')
    
    tl2.from('.section2 .container #fast-row-right-content',{
        x: 300,
        opacity: 0, 
        duration: 0.2
    },'fast')
    
    
    tl2.from('.section2 .container #second-row-left-content',{
        x: -300,
        opacity: 0, 
        duration: 0.2
    },'second')
    
    tl2.from('.section2 .container #second-row-right-content',{
        x: 300,
        opacity: 0, 
        duration: 0.2
    },'second')
}

section1_animation();
section2_animation()

