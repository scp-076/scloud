const versionBoxes = document.querySelectorAll('.versions-wrap-mobile__block');
const btnCloud = versionBoxes[0].querySelector('.versions-wrap-mobile__block__head__btn-green');
const btnBox = versionBoxes[1].querySelector('.versions-wrap-mobile__block__head__btn-orange');


btnCloud.addEventListener('click', () => {
    let items = versionBoxes[0].querySelectorAll('.versions-wrap-mobile__block__item');

    items.forEach((e) => {
        e.classList.toggle('hidden');
    });
});

btnBox.addEventListener('click', () => {
    let items = versionBoxes[1].querySelectorAll('.versions-wrap-mobile__block__item');

    items.forEach((e) => {
        e.classList.toggle('hidden');
    });
});

$('.masked').mask('+7-999-999-99-99');


(function($) {
// show more button in integration section
    $( document ).ready(function() {
        $('.integration__more-button').click(function(){
            $('.integration__wrap').toggleClass('open')
        })

    });


    //feedback slider
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

    //footer menu


})(jQuery);

if (document.documentElement.scrollWidth <= 865){
    document.querySelectorAll('.footer-nav__list-title').forEach(item => {
        item.addEventListener('click', e => {
            const justClicked = e.target;
            justClicked.classList.toggle('open')
        })
    });
}

let changeBtnArrowOrient = (selector) => {
    document.querySelector(selector).addEventListener('click', (e) => {
        let btn = e.target;
        btn.classList.toggle('open');
    });
}

changeBtnArrowOrient('.versions-wrap-mobile__block__head__btn-green');
changeBtnArrowOrient('.versions-wrap-mobile__block__head__btn-orange');
