export default function FileActiveModule() {


    $('.tab-link-mobi').on('click', function () {
        $('.tab-link').slideToggle();
    });


    // $('.home-tab-mobi').on('click', function () {
    //     $('.home-tab').slideToggle('1000');
    // });

    if ($('.home-bcontent').length) {
       
        const $tab = $('.home-bcontent');
        $(document).mouseup(function (e) { 
            if (!$tab.is(e.target) && $tab.has(e.target).length === 0) { // nếu click vàp mục tiêu k phải là vùng chứa và cũng k phải là con của vùng chứa
                $tab.removeClass('active');
            }
        });

       
        $('.home-tab-mobi').on('click', function () {
            $tab.toggleClass('active');
        });

    }



    $('.box-tab-about .btab-item').on('click', function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    $('.box-tab-about .btab-title').on('click', function () {
        $('.btab-list').slideToggle();
    });

    if ($('.related-faq').length) {
        $('.faq-box .faq-tt').on('click', function () {
            $(this).next().slideToggle();
            $(this).parent().toggleClass('active');
        });
    }

    if ($('.faq').length) {
        $('.faq-box .faq-tt').on('click', function () {
            $(this).next().slideToggle();
            $(this).parent().toggleClass('active');
            $(this).parent().siblings().find('.faq-content').slideUp();
            $(this).parent().siblings().removeClass('active');
        });
    }







}