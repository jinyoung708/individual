// AOS
AOS.init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: 'animated',
});

// 후원 슬라이드
var donationSwiper = new Swiper(".donation_swiper", {
    slidesPerView: "auto",
    spaceBetween: 53,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// 투명성 리스트 swiper
var listSwiper = new Swiper(".list_swiper", {
    spaceBetween: 30,
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
        
        // transitionEnd: function(){
        //     var activeIndex = this.activeIndex;
        //     var activeSlide = $(".video_swiper").find(".swiper-slide").eq(activeIndex);
        //     activeSlide.find(".video_box").addClass("play");
        //     var activeSlideVideo = activeSlide.find('iframe');
        //     var player = new Vimeo.Player(activeSlideVideo);
        //     player.play();
        // },
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