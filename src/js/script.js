
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
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false
        // },
        speed: 3000,
    });
// campaign スライダー（Swiper）//
    const campaignSwiper = new Swiper(".campaign__Swiper", {
        loop: true,
        slidesPerView: 1.26,
        spaceBetween: 24,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false
        // },
        speed: 2000,

        breakpoints: {
            768: {
                slidesPerView: 3.48,
                spaceBetween: 40,
            },
        }
    });

    //要素の取得とスピードの設定
    const box = $('.js-colorbox'),
    speed = 700;  

    //.js-colorboxの付いた全ての要素に対して下記の処理を行う
    box.each(function(){
        $(this).append('<div class="color"></div>')
        const color = $(this).find($('.color'));
        const image = $(this).find('img');
        let counter = 0;

        image.css('opacity','0');
        color.css('width','0%');
        //inviewを使って背景色が画面に現れたら処理をする
        color.on('inview', function(){
            if(counter == 0){
                $(this).delay(200).animate({'width':'100%'},speed,function(){
                image.css('opacity','1');
                $(this).css({'left':'0' , 'right':'auto'});
                $(this).animate({'width':'0%'},speed);
                })
                counter = 1;
            }
        });
    });


// ページトップ //
    $(function() {
        const pageTop = $('.js-pagetop');
        pageTop.hide();
        //スクロールしたら
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
                pageTop.fadeIn();
            } else {
                pageTop.fadeOut();
            }
        });
        pageTop.on("click",function () {
            $('body,html').animate({ //animate関数を参照
                scrollTop: 0
            }, 500);
        });
        return false;
    });

    //フッター手前で止まるボタン
    $(".js-pagetop").hide();
    $(window).on("scroll", function () {
    const scrollHeight = $(document).height();
    const scrollPosition = $(window).height() + $(window).scrollTop();
    const footHeight = $("footer").innerHeight();
    if (scrollHeight - scrollPosition <= footHeight) {
    // ページトップボタンがフッター手前に来たらpositionとfixedからabsoluteに変更
        $(".js-pagetop").css({
        position: "absolute",
        bottom: footHeight + 20,
        });
    } else {
        $(".js-pagetop").css({
        position: "fixed",
        bottom: "20px",
        });
    }
    });
});
