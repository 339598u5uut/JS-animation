window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {});
    document.querySelector('#reverse').onclick = () => tween.reverse();

    const burger = document.querySelector('#burger'),
        navList = document.querySelector('#nav__list'),
        social = document.querySelector('#social'),
        menuRight = document.querySelector('#menu__right');
    menuTop = document.querySelector('#menu__top');
    menu = document.querySelector('#menu');
    closeBtn = document.querySelector('#reverse');
    const burgerTl = gsap.timeline({ paused: true });

    burgerTl.add('start')
        .fromTo(menuTop, {
            opacity: 0,
            y: -140
        }, {
            y: 0,
            duration: 0.5,
            opacity: 1,
            ease: "slow"
        }, 'start+=0.4')
        .fromTo(menu, {
            opacity: 0,
            y: 140
        }, {
            y: 0,
            display: 'block',
            opacity: 1,
            duration: 1,
            ease: "slow"
        }, 'start')

    .fromTo(navList, {
        opacity: 0,
        y: 30
    }, {
        y: 0,
        duration: 0.5,
        delay: 0.2,
        opacity: 1,
        ease: "circ"
    }).fromTo(social, {
        opacity: 0,
        y: 30
    }, {
        y: 0,
        duration: 0.75,
        opacity: 1,
        ease: "circ"
    }).fromTo(menuRight, {
        opacity: 0,
        y: 30
    }, {
        y: 0,
        duration: 1,
        opacity: 1,
        ease: "circ"
    }, ">-0.25");

    burger.addEventListener('click', () => {
        burgerTl.play();
    });

    closeBtn.addEventListener('click', () => {
        burgerTl.reverse();
    });


    let heroTitle = document.querySelector('#hero__title');
    let heroDescr = document.querySelector('#hero__descr');
    let heroBtn = document.querySelector('#hero__btn');
    let img1 = document.querySelector('#img1');
    let img2 = document.querySelector('#img2');
    let img3 = document.querySelector('#img3');
    let photosAuthor = document.querySelector('#photos__author');



    let loadingTl = gsap.timeline({ defaults: { ease: "power4" } });
    loadingTl.fromTo(heroTitle, {
        opacity: 0,
        y: 150
    }, {
        y: 0,
        delay: .4,
        opacity: 1,
        duration: 3
    }).fromTo(heroBtn, {
        opacity: 0,
        y: 150
    }, {
        y: 0,
        delay: .4,
        duration: 3,
        opacity: 1
    }, "<").fromTo(heroDescr, {
        opacity: 0
    }, {
        opacity: 1
    }, ">-2").fromTo(img1, {
        sсale: 0.3,
        opacity: 0
    }, {
        sсale: 1,
        opacity: 1
    }, "<").fromTo(img2, {
        sсale: 0.3,
        opacity: 0
    }, {
        sсale: 1,
        opacity: 1
    }, ">").fromTo(img3, {
        sсale: 0.3,
        opacity: 0
    }, {
        sсale: 1,
        opacity: 1
    }, ">").fromTo(photosAuthor, {
        opacity: 0
    }, {
        opacity: 1
    }, ">");

});