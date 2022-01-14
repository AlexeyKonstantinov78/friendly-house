const footerMaps = document.querySelector('.footer__maps');

function init(){

    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.848762, 37.375830],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 15
    }),

    MyIcon = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Мы тут',
        balloonContent: '103929, Москва, Пятницкое шоссе, дом 28'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: './img/iconsmap.png',
        // Размеры метки.
        iconImageSize: [39, 59],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-10, -45]
    });

    myMap.geoObjects.add(myPlacemark);
}

footerMaps.addEventListener('mouseenter', (event) => {    
    
    if (document.querySelector('#map').childNodes.length === 0) ymaps.ready(init);
});