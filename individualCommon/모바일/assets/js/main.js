// AOS
AOS.init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: 'animated',
});

// 탭 swiper
var tabSwiper = new Swiper(".tab_swiper", {
    spaceBetween: 20,
    slidesPerView: "auto",
});

// 후원 swiper
var mainSwiper = new Swiper(".donation_swiper", {
    spaceBetween: 20,
    pagination: {
		el: ".swiper-pagination.progressbar",
		type: "progressbar",
	},
    // autoHeight: true,
    on: {
        transitionStart: function (swiper) {
            let total = swiper.slides.length;
            let current = swiper.realIndex + 1;
            swiper.el.querySelector(".current").textContent = current;
            swiper.el.querySelector(".total").textContent = total;
        },
    }
});

// 투명성 리스트 swiper
var listSwiper = new Swiper(".list_swiper", {
    spaceBetween: 15,
    slidesPerView: "auto",
    freeMode: true,
});

// 투명성 비디오 swiper
var videoSwiper = new Swiper(".video_swiper", {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    spaceBetween: 10,
    thumbs: {
        swiper: listSwiper,
    },
    allowTouchMove: false,
    on: {
        transitionStart: function(){
            var videos = $(".video_swiper").find('iframe');
            $(".video_swiper").find(".video_box").removeClass("play");
            Array.prototype.forEach.call(videos, function(video){
                var player = new Vimeo.Player(video);
                player.pause();
            });
        },
    }
});

// 팝업 swiper
var popupSwiper = new Swiper(".popup_swiper", {
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    a11y: {
        prevSlideMessage: '이전 슬라이드로 이동',
        nextSlideMessage: '다음 슬라이드로 이동',
    },
});

// 전체사업후원 클릭 이벤트
function infoTxt(idx) {
    $(".all_donation_box .info li").eq(idx).addClass("active").siblings().removeClass("active");
}

// 팝업 이벤트
function openPopup(name) {
    $(`.popup_wrap[data-popup="${name}"]`).addClass("active");

    // 팝업 닫기
    $(".popup_wrap .btn_close").on('click', function(){
        $(this).parents('.popup_wrap').removeClass('active');
    });
}