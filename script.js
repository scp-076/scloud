const versionBoxes = document.querySelectorAll('.versions-wrap-mobile__block');
const btnCloud = versionBoxes[0].querySelector('.versions-wrap-mobile__block__head__btn-green');
const btnBox = versionBoxes[1].querySelector('.versions-wrap-mobile__block__head__btn-orange');


btnCloud.addEventListener('click', () => {
    let items = versionBoxes[0].querySelectorAll('.versions-wrap-mobile__block__item');

    items.forEach((e) => {
        e.classList.toggle('hidden');
    });
    let btnCloudImg = versionBoxes[0].querySelector('.btn-green-img');
    btnCloudImg.src = btnCloudImg.src === "http://localhost:63342/scloud/images/arrow_up_green.svg" ? "http://localhost:63342/scloud/images/arrow_down_green.svg" : "http://localhost:63342/scloud/images/arrow_up_green.svg";
});

btnBox.addEventListener('click', () => {
    let items = versionBoxes[1].querySelectorAll('.versions-wrap-mobile__block__item');

    items.forEach((e) => {
        e.classList.toggle('hidden');
    });
    let btnBoxImg = versionBoxes[1].querySelector('.btn-orange-img');
    btnBoxImg.src = btnBoxImg.src === "http://localhost:63342/scloud/images/arrow_up_orange.svg" ? "http://localhost:63342/scloud/images/arrow_down_orange.svg" : "http://localhost:63342/scloud/images/arrow_up_orange.svg"
});

$('.masked').mask('+7-999-999-99-99');


(function($) {
// кнопочка показать больше в разделе интеграции
    $( document ).ready(function() {
        $('.integration__more-button').click(function(){
            $('.integration__wrap').toggleClass('open')
        })

    });


    //слайдер с отзывами
    let mySwiper = new Swiper ('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },
        loop: true,
        grabCursor: true,
        autoHeight: true,
        slidesPerView: 1,
        breakpoints: {

            1026: {
                slidesPerView: 2,
                spaceBetween: 24
            }
        }
    });

    //меню в футере
    $( '.btn-open-bar--js-left' ).click(function() {
        $('.class-ul').toggleClass('open')

    });

})(jQuery);