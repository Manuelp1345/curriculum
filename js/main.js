$(document).ready(function() {


    gsap.to("#js", {
        content: "hyml",
        background: "linear-gradient(144deg, #EFD81D 50%, rgba(239, 216, 29, .4) 50%)",
        duration: 2
    })

    gsap.to("#html", {
        content: "hyml",
        background: "linear-gradient(162deg, #DD4B25 50%, rgba(221, 75, 37, .7) 50%)",
        duration: 2
    })

    gsap.to("#css", {
        content: "hyml",
        background: "linear-gradient(126deg, #0091CA 50%, rgba(0, 145,202, .7) 50%)",
        duration: 2
    })

    gsap.to("#node", {
        content: "hyml",
        background: "linear-gradient(90deg, #70B556 50%, rgba(112, 181, 86, .7) 50%)",
        duration: 2
    })

    gsap.to("#php", {
        background: "linear-gradient(90deg, #697AB1 50%, rgba(105, 122, 177, .7) 50%)",
        duration: 2
    })
    gsap.to(".line", {
        width: "100%",
        duration: 2
    })

    gsap.to(".skills, .forma", {
        duration: 2.5,
        ease: "elastic.out(1, 0.3)",
        left: 60
    })
});