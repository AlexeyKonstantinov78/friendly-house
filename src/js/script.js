'use strict';

const bannerItems = document.querySelector('.banner__items'); 
let orderNum = 0;    

const bannerItem = () => {
    const bannerItem = document.querySelectorAll('.banner__item');
    let arr = '';

    bannerItem.forEach(item => {
        if (item.classList.contains('banner__activ')) {
            arr = item;
        }
    });

    if (arr !== '') {
        return arr;
    }

    return;
};


const changeBg = (item) => {
    
    const li = bannerItem(),
        bannerContainer = document.querySelector('.banner__container'),
        content = item.querySelector('p').textContent,
        bg = item.dataset.bg,
        bannerTitleName = document.querySelector('.banner__title_name');

    if (bannerItem() !== undefined) {
        orderNum += 1;
        li.style.order = `${orderNum}`;
        li.classList.remove('banner__activ');
    } 
    item.classList.add('banner__activ');
    bannerTitleName.textContent = content;
    bannerContainer.style.backgroundImage = `url('${bg}')`;
};

bannerItems.addEventListener('click', (event) => {
    let target = event.target;

    if (target.closest('.banner__item')) changeBg(target.closest('.banner__item'));    

});

//открытие бургер меню и формы

const menuBurgerNav = $('.menu-burger__nav'),
    modal = $('.modal');    

function hide (obj) {
    obj.hide(500);
    if (!obj.hasClass('modal')) obj.toggleClass('close');
}

function show (obj) {
    obj.show(500);
    if (obj.hasClass('menu-burger__nav')) obj.toggleClass('close');
}

$('.menu-burger__btn, .menu-burger__svg, .menu-burger__items, .modal__btn, .modal__close, .modal').on('click', function (event) {
    let target = event.target;

    if ($(this).hasClass('menu-burger__btn')) {

        if (window.screen.width < 640) {
            const burgerSvg =  $('.menu-burger__svg'),
                burgerSvgClose =  $('.menu-burger__svg_close');

            if (!$('.menu-burger__nav').hasClass('close')) {
                
                burgerSvg.css({display: 'none'});
                burgerSvgClose.css({display: 'block'});
            } else {
                burgerSvg.css({display: 'block'});
                burgerSvgClose.css({display: 'none'});
            }
            
        }
    }

    if ($(this).hasClass('menu-burger__svg')) {
        if (!menuBurgerNav.hasClass('close')) hide(menuBurgerNav);
        else show(menuBurgerNav);   
    }

    if ($(this).hasClass('menu-burger__items') && target.closest('.menu-burger__link')) hide(menuBurgerNav);


    if ($(this).hasClass('modal__btn')) {
        if (!menuBurgerNav.hasClass('close')) hide(menuBurgerNav);

        show(modal);    
        window.scrollTo(pageXOffset, 0);
    }

    if ($(this).hasClass('modal__close')) hide(modal);     

    if ($(this).hasClass('modal')) {
        if (target.classList.contains('modal__container') || target.classList.contains('modal__form')) hide(modal);     
    }
});

//отправка формы в модальном окне
$('.modal__form-content, .form__content_main').submit(function (event) {
    event.preventDefault();
    
    const modalForm = $(this);

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'POST',
        data: $(this).serialize(),
        success(data) {                       
            
            const div = $('<div>').addClass('modal__title-rezult')
                    .html(`<p style="text-align: center;">Спасибо заявка принята ${data.id}</p>`);
            modalForm.append(div);           
            
            modal.slideUp(5000); 
            
            setTimeout(function() {
                $('.modal__title-rezult').detach();
                modalForm[0].reset();
            },5000);
        },
        erorr() {
            $('.form__title').text('Что то не так повторите позже'); 
            modal.slideUp(5000);
            setTimeout(function() {                
                modalForm[0].reset();
            },5000);
        }
    });

});
