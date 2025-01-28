var tl = gsap.timeline({
    repeat: -1,
});

tl.to('main img',{
    width: "100%",
    ease: Expo.easeInOut,
    stagger: 2,
},'a')

tl.to('main .text h1',{
    y: -100,
    ease: Expo.easeInOut,
    stagger: 2,
},'a')

tl.to('main .text h1',{
    y: -210,
    delay: 2,
    ease: Expo.easeInOut,
    stagger: 2,
},'a')