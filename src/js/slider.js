'use strict';

const sliderAll = () => {
    const swiper1 = new Swiper('.swiper1');  
    
    const swiper2 = new Swiper('.swiper2');  
};

const pets = () => {
    const swiper3 = new Swiper('.swiper3', {
        autoHeight: true,
        slidesPerView: 1,
        centeredSlides: true,
        centerInsufficientSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });  
};

window.addEventListener('DOMContentLoaded', () => {

    // console.log('DOMContentLoaded' + ' : ' + window.screen.width);
    if (window.screen.width <= 640) sliderAll();
    if (window.screen.height <= 840) pets();
});

window.addEventListener('resize', () => {

    // console.log('resize' + ' : ' + window.screen.width);
    if (window.screen.width <= 640) sliderAll();
    if (window.screen.height <= 840) pets();

});

// const swiper1 = new Swiper('.swiper1');