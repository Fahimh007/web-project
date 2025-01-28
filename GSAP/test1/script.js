
// gsap.to('.box',{
//     x: 600,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor:"lightblue",
//     borderRadius:"50%",
//     scale: 0.1,
// })

/////uses of timeline function 

// var tl = gsap.timeline();

// tl.to("#text1",{
//     x:500,
//     duration: 2, 
//     dilay:1,
//     yoyo: true,
// })

// tl.to("#text2",{
//     x:500,
//     duration: 2,  
//     yoyo: true,  
// })

// tl.to("#text3",{
//     x:500,
//     duration: 2,
//     yoyo: true, 
// })
gsap.from('.nav .logo',{
    y: -20,
    opacity: 0,
    duration: 0.51,
})

var tl = gsap.timeline();
tl.from('h4',{
    y: -20,
    opacity: 0,
    duration: 0.5,
    delay: 1,
    stagger: 0.3,
})


