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

 
// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
    var script = document.createElement("script");

    if (script.readyState){  // IE
        script.onreadystatechange = function(){
        if (script.readyState == "loaded" ||
                script.readyState == "complete"){
            script.onreadystatechange = null;
            callback();
        }
      };
    } else {  // Другие браузеры
        script.onload = function(){
        callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

footerMaps.addEventListener('mouseenter', (event) => {    
    
    if (document.querySelector('#map').childNodes.length === 0) {
        // Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?apikey=d50fe589-2d7c-4e62-b6cf-87dca45613ed&lang=ru_RU", function(){
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
            ymaps.load(init);
        });
        
    }
});