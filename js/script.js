$(function () {


    // toggle-button : open&close
    $("#toggle-button").click(function(){
        $("nav.menu, .nav-list ul li").slideDown();
    });
    $(".bg").click(function(){
        $("nav.menu, .nav-list ul li").slideUp();
    });
      
    //   $("#toggle-button").on("click", function() {
    //     if ($(this).hasClass("open")) {
    //       $(".nav.menu, .nav-list ul li").slideUp(function() {
    //         $("#toggle-button").removeClass("open");
    //       });
    //     } else {
    //       $(this).addClass("open");
    //       setTimeout(function() {
    //         $(".nav.menu, .nav-list ul li").stop().slideDown();
    //       }, 200);
    //     }
    //   });


    // logo click : scroll top
    $(" .logo, .btn_top").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });

    // scroll action
    $(window).scroll(function () {

        // btn_top
        if ($(this).scrollTop() > 150) {
            $(".btn_top").fadeIn();
        } else {
            $(".btn_top").fadeOut();
        }
    });


    $('.best-list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [{
                breakpoint: 1025, // 화면 폭 1025px 이하일 때 적용
                settings: {
                    slidesToShow: 2, // 보여질 슬라이드 개수 변경
                }
            },

            {
                breakpoint: 769, // 화면 폭 769px 이하일 때 적용
                settings: {
                    slidesToShow: 1, // 보여질 슬라이드 개수 변경
                    centerMode: true, // 슬라이드 중앙 정렬 활성화
                    centerPadding: '0', // 중앙 정렬 시 양쪽 여백 설정
                }
            }
        ]
    });




});
