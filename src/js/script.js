
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
        speed: 5000,
        autoplay: {
            delay: 0,
        },
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

        breakpoints: {
            768: {
                slidesPerView: 2.2,
                spaceBetween: 32,
            },

            1150: {
                slidesPerView: 3.4,
                spaceBetween: 40,
            }
        }
    });
});
