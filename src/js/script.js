
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    // ローディングアニメーション

    // $(function () {
    //     let webStorage = function () {
    //         if (sessionStorage.getItem('access')) {
    //             //2回目以降アクセス時の処理
    //             $(".loading").addClass('is-active');
    //         } else {
    //             //初回アクセス時の処理
    //             sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
    //             setTimeout(function () {
    //                 $('.loading__title').addClass('is-active');
    //             }, 0);
    //             setTimeout(function () {
    //                 $('.loading__left').addClass('is-active');
    //             }, 500);
    //             setTimeout(function () {
    //                 $('.loading__right').addClass('is-active');
    //             }, 1000);
    //             setTimeout(function () {
    //                 // ローディングを数秒後に非表示にする
    //                 $(".loading").addClass('is-active');
    //             }, 3000); // ローディングを表示する時間
    //         }
    //     }
    //     webStorage();
    // });


    // $(window).on('load', function(){
    //     setTimeout(function () {
    //         $('.loading__title').addClass('is-active');
    //     }, 0);
    //     setTimeout(function () {
    //         $('.loading__left').addClass('is-active');
    //     }, 500);
    //     setTimeout(function () {
    //         $('.loading__right').addClass('is-active');
    //     }, 600);
    //     setTimeout(function () {
    //         $('.loading__title--white').addClass('is-active');
    //     }, 1000);
    //     setTimeout(function () {
    //         // ローディングを数秒後に非表示にする
    //         $(".loading").addClass('is-active');
    //     }, 3000); // ローディングを表示する時間

    // });

    // ハンバーガーメニュー //
    $(function () {
        $('.hamburger').on('click', function () {
            $(this).toggleClass('active');
            $('.header').toggleClass('active');
            return false;
        });
    });

    // ドロワーメニュー //
    $(function () {
        $('.hamburger').on('click', function () {
            $('.sp-nav').toggleClass('active');
            return false;
        });
    });

    // ドロワーメニュー下の背景固定 //
    $(function () {
        $('.hamburger').on('click', function () {
            $('body').toggleClass('no-scroll');
            return false;
        });
    });

    // mainview スライダー（Swiper）//
    const mvSwiper = new Swiper(".js-mv-Swiper", {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        speed: 3000,
    });

    // campaign スライダー（Swiper）//
    const campaignSwiper = new Swiper(".js-campaign-Swiper", {
        loop: true,
        slidesPerView: "1.26",
        spaceBetween: 24,
        speed: 2000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },

        breakpoints: {
            768: {
                slidesPerView: "3.48",
                spaceBetween: 40,
            },
            1920: {
                slidesPerView: "5"
            }
        }
    });


    //要素の取得とスピードの設定
    const box = $('.js-colorbox'),
        speed = 700;

    //.js-colorboxの付いた全ての要素に対して下記の処理を行う
    box.each(function () {
        $(this).append('<div class="color"></div>')
        const color = $(this).find($('.color'));
        const image = $(this).find('img');
        let counter = 0;

        image.css('opacity', '0');
        color.css('width', '0%');
        //inviewを使って背景色が画面に現れたら処理をする
        color.on('inview', function () {
            if (counter == 0) {
                $(this).delay(200).animate({ 'width': '100%' }, speed, function () {
                    image.css('opacity', '1');
                    $(this).css({ 'left': '0', 'right': 'auto' });
                    $(this).animate({ 'width': '0%' }, speed);
                })
                counter = 1;
            }
        });
    });


    // ページトップ //
    $(function () {
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
        pageTop.on("click", function () {
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



    //page-campaignのタグ
    $(".js-tag").on("click", function () {
        $(".js-tag").removeClass("current");
        $(this).addClass("current");
    });

    //page-informationのタブ
    // タブメニュー
    $(function () {
        $(".js-tab-content:first-of-type").css("display", "block");
        $(".js-tab").on("click", function () {
            $(".current").removeClass("current");
            $(this).addClass("current");
            const index = $(this).index();
            $(".js-tab-content").hide().eq(index).fadeIn(300);
        });
    });


    MicroModal.init({
        openTrigger: 'data-micromodal-trigger', // トリガーの属性名
        closeTrigger: 'data-micromodal-close',  // クローズトリガーの属性名
        disableScroll: true,                    // モーダル表示時にスクロールを無効化
        // disableFocus: false,                    // フォーカス制御を無効化
        // awaitCloseAnimation: true,              // クローズアニメーション完了を待つ
        // debugMode: false                        // デバッグモード
    });

    $(function () {
        // タイトルをクリックすると
        $(".js-accordion").on("click", function () {
          // クリックした次の要素を開閉
            $(this).children('.sidebar__monthly-items').slideToggle(300);
          // タイトルにopenクラスを付け外しして矢印の向きを変更
            $(this).toggleClass("open", 300);
        });
    });

});
