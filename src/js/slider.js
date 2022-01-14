'use strict';

const sliderAll = () => {
    const swiper1 = new Swiper('.swiper1', {
        slidesPerView: 1,
    });  
    
    const swiper2 = new Swiper('.swiper2', {
        slidesPerView: 1,
    });  
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

const reload = () => {
    const initSlider1 = document.querySelector('.swiper1'),
        initSlider2 = document.querySelector('.swiper2'),
        initSlider3 = document.querySelector('.swiper3');
    
    if (initSlider3.classList.contains('swiper-initialized') && window.screen.width > 840) location.reload();
    if (initSlider2.classList.contains('swiper-initialized') && window.screen.width > 640) location.reload();
    if (initSlider1.classList.contains('swiper-initialized') && window.screen.width > 640) location.reload();
};

window.addEventListener('DOMContentLoaded', () => {
    
    if (window.screen.width <= 640) sliderAll();
    if (window.screen.width <= 840) pets();
});

window.addEventListener('resize', () => {
    
    if (window.screen.width <= 640) sliderAll();
    if (window.screen.width <= 840) pets();
    if (window.screen.width > 640) reload();

});

