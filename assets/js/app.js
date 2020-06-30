gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(SplitText);

$(document).ready(function($){



    console.clear();
    
    select = e => document.querySelector(e);
    selectAll = e => document.querySelectorAll(e);

    const slides = selectAll(".uk-section");
    const slidesHeading = selectAll(".section_heading");
    const splitTitles = new SplitText(slidesHeading, {
        type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative"
    });

    const slidesQuoteOne = selectAll(".section_two .s_quote");
    const slidesQuoteTwo = selectAll(".section_three .s_quote");

    const slideTwo = selectAll(".section_two");
    const navMenu = selectAll(".section_lenders");

    let slideID = 0;

    const home = select("#home");

    function initIntro(){
        let tl = gsap.timeline({delay:0.1});

        tl.from(".s_logo",{
            opacity: 0,
            x: 20,
            ease: "power4",
            duration: 3
        })

        .from(".s_email",{
            opacity: 0,
            x: -20,
            ease: "power4",
            duration: 3
        }, 0.7)

        .from(".navbar li",{
            y: 10,
            opacity: 0,
            ease: "power4",
            duration: 3
        }, 1)

        .from(".bar_wrapper",{
            opacity: 0,
            height: 0,
            width: 1,
            ease: "power4",
            duration: 3
        }, 1)

        .from(".scroll_more_text",{
            opacity: 0,
            y: 10,
            ease: "power4",
            duration: 3
        }, 1)

        .fromTo(".grey_path",{ 
            drawSVG: "100% 100%", duration: 2}, {
            drawSVG: "0% 100%", duration: 2
        }, 1)

        .from(".grey_circle",{
            duration: 1,
            drawSVG: 0
        }, 1)
    
        .from(".bg_main", {
            opacity: 0,
            scale: 1.08,
            duration: 3
        }, 2)
    
        .from("#home .s_text_box",{
            duration: 3,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        }, 1)
    }


    // Slides section

    function initSlides() {
        // Animation of each slide scrolling into view

        slides.forEach((slide, i) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: slide,
                    start: "0px center",
                    markers: false,
                    scrub: false
                }
            });

            tl.from(slide.querySelectorAll('.section_heading'), {
                ease: "power4",
                y: "+=5vh",
                duration: 3.5,
            })

            .from(slide.querySelectorAll('.line__inner'), {
                y: 200,
                duration: 1,
                ease: "power4",
                stagger: 0.1
            }, 0)
        })
    }


    function initQuoteOne() {
        slidesQuoteOne.forEach((slideQuoteOne, i) => {
            let qtl = gsap.timeline({
                scrollTrigger: {
                    trigger: slideQuoteOne,
                    start: "-10% 50%",
                    markers: false,
                }
            });

            qtl.from(slideQuoteOne.querySelectorAll('blockquote'), {
                ease: "power4",
                x: "+=50vw",
                opacity: 0,
                duration: 2.5
            })
        })
    }

    function initQuoteTwo() {
        slidesQuoteTwo.forEach((slideQuoteTwo, i) => {
            let qtl = gsap.timeline({
                scrollTrigger: {
                    trigger: slideQuoteTwo,
                    start: "-10% 50%",
                    markers: false,
                }
            });

            qtl.from(slideQuoteTwo.querySelectorAll('blockquote'), {
                ease: "power4",
                x: "+=50vw",
                opacity: 0,
                duration: 3.5
            })
        })
    }

    // function initSlideTwo() {
    //     let mtlOne = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: slideTwo,
    //             start: "top top",
    //             end: "bottom bottom",
    //             scrub: true,
    //             markers: true
    //         }
    //     });

    //     mtlOne.to('.bar_wrapper', {
    //         ease: "power4",
    //         height: 0
    //     })

    //     .to('.scroll_more', {
    //         ease: "power4",
    //         display: "none",
    //         opacity: 0
    //     })

    //     .to('.menu_line_lenders', {
    //         ease: "power4",
    //         height: "100px"
    //     })

    // }


    function init(){
        gsap.set(home, { autoAlpha: 1 });
        initIntro();
        initSlides();
        // initHeadingOne();
        initQuoteOne();
        initQuoteTwo();
        // initSlideTwo();
    }

    window.onload = () => {
        init();
    };

    // variables

    const bgMain = document.querySelector(".bg_main");
    const heroTitle = document.querySelector(".hero_text");
    const blueCircle = document.querySelector(".blue_circle");
    const sectionTwo = document.querySelector(".section_two");
    const sectionTwoHeading = document.querySelector(".section_two .section_heading");
    const sectionTwoQuote = document.querySelector(".section_two ")

    const tlImage = gsap.timeline({
        scrollTrigger:{
            trigger: "#home",
            start: "top top",
            end: "+=210%",
            scrub: true,
            pin: "#home",
            markers: false
        }
    });

    tlImage.to(bgMain, {
        y: "-0px", 
        duration: 0.1,
        scale: 0.4,
        transformOrigin: "top left"
    })

    const tlHero = gsap.timeline({
        scrollTrigger:{
            trigger: ".hero_text",
            start: "top top",
            scrub: true,
            markers: false
        }
    })

    tlHero.to(heroTitle,{
        left: "0",
        right: "auto",
        y: "10px",
        opacity: 1,
        duration: 0.5
    })

    // tlHero.to(blueCircle, {
    //     r: "100vw",
    //     duration: 0.5
    // })

    // const tlSectionTwo = gsap.timeline({
    //     scrollTrigger:{
    //         trigger: blueCircle,
    //         start: "top 400px",
    //         scrub: true,
    //         markers: false
    //     }
    // })

    // tlSectionTwo.to(sectionTwo, {
    //     opacity: 1,
    //     duration: 0.5,
    //     y: 0,
    // })

    // const tlSectionTwoContent = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: sectionTwoHeading,
    //         start: "top 40%",
    //         end: "top 150px",
    //         scrub: true,
    //         markers: true
    //     }
    // })

    // tlSectionTwoContent.to(sectionTwoHeading, {
    //     marginRight: "auto",
    //     marginLeft: "0",
    //     duration: 5,
    //     opacity: 1,
    //     scrub: true
    // })

    // .to(".section_two .heading_wrapper", {
    //     duration: 0.5,
    //     opacity: 1,
    //     delay: 0.1,
    //     y: "-20"
    // })

    // .to(".section_two .body_wrapper", {
    //     duration: 0.5,
    //     opacity: 1,
    //     delay: 0.1,
    //     y: "-20"
    // })



    document.getElementById("logo").addEventListener("click", function() {
        // tlSectionTwoContent.reverse();
        // tlSectionTwo.reverse();
        // tlHero.reverse();
    });

    // Layered Pinning


    // Sidebar

    var tlNav = new TimelineMax({ paused: true });
    tlNav.to(".sidebar", 1, {
        right: 0,
        ease: Power1.easeOut
    });

    tlNav.staggerTo(".sidebar_wrapper div", 1, {
        y: -15,
        opacity: 1,
        ease: Power1.easeOut
    })

    document.getElementById("sidebar-close").addEventListener("click", function() {
        tlNav.reverse();
    });

    $(".career_list").delegate('.btn_apply', 'click', function(){
        var applyButton = this.id.split('-');
        showSidebar(parseInt(applyButton[1]), true);
    });

    function showSidebar(){
        tlNav.play();
    }

    // SKEW images with ScrollTrigger

    // let proxy = { skew: 0 },
    //     skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"),
    //     clamp = gsap.utils.clamp(-20, 20);

    // ScrollTrigger.create({
    //     onUpdate: (self) => {
    //         let skew = clamp(self.getVelocity() / - 300);
    //         if(Math.abs(skew) > Math.abs(proxy.skew)) {
    //             proxy.skew = skew;
    //             gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    //         }
    //     }
    // });

    // gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});

    // ScrollTrigger.create({
    //     trigger: ".section_two",
    //     start: "top 30%",
    //     end: "bottom 50%",
    //     markers: false,
    //     toggleClass: {targets: ".s_navbar, .s_header", className: "dark_background"}
    // });

    ScrollTrigger.create({
        trigger: ".section_five",
        start: "top 50%",
        end: "bottom 50%",
        markers: false,
        toggleClass: {targets: ".s_navbar, .s_header", className: "dark_background"}
    });

    // const secTwo = document.querySelector(".section_two");

    // function animationNavOne(){
    //     let tlNav = gsap.timeline({delay:0.1});
    //     tlNav.from('.menu_line_one', {
    //         scaleX: 0,
    //         transformOrigin: "center center",
    //         ease: "none"
    //     })

    //     .to('.bar_wrapper', {
    //         height: 0,
    //         ease: "none"
    //     })
    // }


    //  Lenders section active
    ScrollTrigger.create({
        trigger: ".section_two",
        toggleActions: "restart pause resume pause",
        start: "top 10%",
        end: "bottom 10%",
        markers: false,
        scrub: true,
        toggleClass: { targets: ".s_navbar, .s_header", className: "section_lenders"},
    });

    // Services Section Active
    ScrollTrigger.create({
        trigger: ".section_three",
        toggleActions: "restart pause resume pause",
        start: "top 10%",
        end: "bottom 10%",
        markers: false,
        scrub: true,
        toggleClass: { targets: ".s_navbar, .s_header", className: "section_services"},
    });

    // About Section Active
    ScrollTrigger.create({
        trigger: ".section_four",
        toggleActions: "restart pause resume pause",
        start: "top 10%",
        end: "bottom 30%",
        markers: true,
        scrub: true,
        toggleClass: { targets: ".s_navbar, .s_header", className: "section_about"},
    });

    // Career Section Active
    ScrollTrigger.create({
        trigger: ".section_five",
        toggleActions: "restart pause resume pause",
        start: "top 30%",
        end: "bottom 10%",
        markers: false,
        scrub: true,
        toggleClass: { targets: ".s_navbar, .s_header", className: "section_career"},
    });


});

new SmoothScroll('.smoothscroll', {
    duration: 2000,
    timingFunction: 'cubic-bezier(0.39, 0.575, 0.565, 1)'
})