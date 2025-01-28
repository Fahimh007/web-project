gsap.to('.page1 .box',{
    duration: 2,
    delay: 1,
    scale: 2,
    backgroundColor: 'blue',
    scrollTrigger: ".page1 .box",
})
gsap.to('.page2 .box',{
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: 'blue',
    scrollTrigger: {
        trigger: ".page2 .box",
        scroller: "body",
        start: "top 80%",
        markers: true,
        scrub: 1,
    },
})
gsap.to('.page3 .box',{
    duration: 2,
    delay: 1,
    scale: 2,
    backgroundColor: 'blue',
    scrollTrigger: ".page3 .box",
})