const versionBoxes = document.querySelectorAll('.versions-wrap-mobile__block');
const btnCloud = versionBoxes[0].querySelector('.versions-wrap-mobile__block__head__btn-green');
const btnBox = versionBoxes[1].querySelector('.versions-wrap-mobile__block__head__btn-orange');


btnCloud.addEventListener('click', () => {
    let items = versionBoxes[0].querySelectorAll('.versions-wrap-mobile__block__item');

    items.forEach((e) => {
        e.classList.toggle('hidden');
    });
    let btnCloudImg = versionBoxes[0].querySelector('.btn-green-img');
    btnCloudImg.src = btnCloudImg.src === "images/arrow_up_green.svg"
        ? "images/arrow_down_green.svg"
        : "images/arrow_up_green.svg";
    console.log(btnCloudImg.src);
});

btnBox.addEventListener('click', () => {
    let items = versionBoxes[1].querySelectorAll('.versions-wrap-mobile__block__item');

    items.forEach((e) => {
        e.classList.toggle('hidden');
    });
    let btnBoxImg = versionBoxes[1].querySelector('.btn-orange-img');
    btnBoxImg.src = btnBoxImg.src === "./images/arrow_up_orange.svg"
        ? "./images/arrow_down_orange.svg"
        : "./images/arrow_up_orange.svg"
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


})(jQuery);

if (document.documentElement.scrollWidth <= 865){
    document.querySelectorAll('.footer-nav__list-title').forEach(item => {
        item.addEventListener('click', event => {
            const justClicked = event.target;
            justClicked.classList.toggle('open')
        })
    });
}

if (document.documentElement.scrollWidth <= 500){
    document.querySelector('.versions-wrap-mobile__block__head__btn-green').addEventListener('click', function(e) {
        e.target.classList.toggle('open');
    });
    document.querySelector('.versions-wrap-mobile__block__head__btn-orange').addEventListener('click', function(e) {
        e.target.classList.toggle('open');
    });
}