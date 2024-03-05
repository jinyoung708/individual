$(document).ready(function(){
    // 탭 show, hide
    $(".tab_box .tab li a").on('click', function(e){
        var idx = $(this).parent('li').index();
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        $(this).parents('.tab').next('.tab_con').children().eq(idx).addClass('active').siblings().removeClass('active');
    });

    // 투명성 영상 재생
    $(".play_btn").on('click', function(){
        $(this).parents(".video_box").addClass("play");
        var iframe = $(this).parent('.dim').next("iframe");
        var player = new Vimeo.Player(iframe);
        player.play();
    });

    // footer 이벤트
    $(document).on('click', '.js_select .js_select_btn', function() {
        if (!$(this).closest('.js_select').hasClass('on')) {
            $('.js_select').removeClass('on');
            $(this).closest('.js_select').addClass('on');
        } else {
            $(this).closest('.js_select').removeClass('on');
        }
    });
    $(document).on('mousedown', function(e) {
        if ($(e.target).closest('.js_select').length < 1) {
            $('.js_select').removeClass('on');
        }
    });
});
