window.addEventListener('DOMContentLoaded', () => {
    //слайдер
    let slide = document.querySelector('.slider__img');
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    let slideText = document.querySelector('.slider__img-descr');
    let slideIndex = 0;
    function changeSlide () {
        if (slideIndex == 0) {
            slide.style.background = 'url(./img/slider/1.jpg) center center/cover no-repeat';
            slideText.textContent = 'Эта элегантная и эмоциональная кухня в стиле модерн—блестящий образец искусства кухонного интерьера. Вся композиция олицетворяет собой целостность: никаких лишних деталей. Столешница из искусственного камня непрерывна по всей длине кухни.';
        } else if (slideIndex == 1) {
            slide.style.background = 'url(./img/slider/2.jpg) center center/cover no-repeat';
            slideText.textContent = 'Новая модель кухни изготовленной из пластика высокого давления HPL. Высокая глянцевость и глубина цвета не оставит равнодушным любого покупателя! Так же пластик является самым антивандальным покрытием для фасадов кухни. Его сложно поцарапать или оставить вмятину. Легко чистится как сухим материалом, так и мыльным раствором.';
        } else if (slideIndex == 2) {
            slide.style.background = 'url(./img/slider/3.png) center center/cover no-repeat';
            slideText.textContent = 'Торжество современных форм и смелость цветовых решений. Вариативность комплектации и эффектный дизайн создают сбалансированную модель с выраженной стилевой концепцией.';
        }
    }
    changeSlide();
   
    next.addEventListener('click', () => {
        if (slideIndex != 2) {
            slideIndex = slideIndex+1;
        } else {
            slideIndex = 0;
        }
        changeSlide();
    });
    prev.addEventListener('click', () => {
        if (slideIndex != 0 ) {
            slideIndex = slideIndex - 1;
        } else {
            slideIndex = 2;
        }
        changeSlide();
    });
    
});