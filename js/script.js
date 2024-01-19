$(function(){
    $("#toggle-button").click(function(){
        $("nav.menu").slideDown();
    });
    $(".bg").click(function(){
        $("nav.menu").slideUp();
    });


    // logo click : scroll top
    $(" .logo, .btn_top").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 400);
    });

    // scroll action
    $(window).scroll(function () {

        // btn_top
        if ($(this).scrollTop() > 50) {
            $(".btn_top").fadeIn();
        } else {
            $(".btn_top").fadeOut();
        }
    });
});


$('.slider').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

// $(".slider").slick({
//     dots: true, // 페이지 번호 표시 (true 또는 false)
//     arrows: true, // 화살표 표시 (true 또는 false)
//     slidesToShow: 3, // 보여질 슬라이드 개수

//     responsive: [{
//             breakpoint: 1025, // 화면 폭 1025px 이하일 때 적용
//             settings: {
//                 slidesToShow: 2, // 보여질 슬라이드 개수 변경
//             }
//         },

//         {
//             breakpoint: 769, // 화면 폭 769px 이하일 때 적용
//             settings: {
//                 slidesToShow: 1, // 보여질 슬라이드 개수 변경
//                 centerMode: true, // 슬라이드 중앙 정렬 활성화
//                 centerPadding: '60px', // 중앙 정렬 시 양쪽 여백 설정
//             }
//         }
//     ]
// });