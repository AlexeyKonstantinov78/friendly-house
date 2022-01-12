'use strict';

const sliderAll = () => {
    const swiper1 = new Swiper('.swiper1');  
    
    const swiper2 = new Swiper('.swiper2');  
};

window.addEventListener('DOMContentLoaded', () => {

    // console.log('DOMContentLoaded' + ' : ' + window.screen.width);
    if (window.screen.width <= 640) sliderAll();
    
});

window.addEventListener('resize', () => {

    // console.log('resize' + ' : ' + window.screen.width);
    if (window.screen.width <= 640) sliderAll();

});

// const swiper1 = new Swiper('.swiper1');