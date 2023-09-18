
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

// ハンバーガーメニュー //
    $(function(){
        $('.hamburger').on('click', function() {
        $(this).toggleClass('active');
        return false;
    });
    });

// ドロワーメニュー //
    $(function(){
        $('.hamburger').on('click', function() {
        $('.sp-nav').toggleClass('active');
        return false;
    });
    });

// mainview スライダー（Swiper）//
    const mvSwiper = new Swiper(".mainview__Swiper", {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        speed: 3000,
    });
// campaign スライダー（Swiper）//
    const campaignSwiper = new Swiper(".campaign__Swiper", {
        loop: true,
        slidesPerView: 1.2,
        spaceBetween: 24,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        speed: 2000,

        breakpoints: {
            768: {
                slidesPerView: 3.4,
                spaceBetween: 40,
            },
        }
    });
});
