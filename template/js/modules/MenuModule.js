export default function MenuModule() {

    if ($('.header-menu').length) {

        $('.hamburger-btn').click(function () {
            $(this).addClass('--active');
            $('.header .header-menu').addClass('--active');
            $('body').addClass('modal-open');
        });

        $('.overplay').click(function () {
            $('.header-menu').removeClass('--active');
            $('.hamburger-btn').removeClass('--active');
            $('body').removeClass('modal-open');
        });

    }

    if ($('.header-home').length) {

        $('.btn-menu').on('click', function () {
            if ($(this).hasClass('open-menu')) {
                $(this).removeClass('open-menu');
                $(this).addClass('close-menu');
                $('body').addClass('modal-open');
                return;
            }
            if ($(this).hasClass('close-menu')) {
                $(this).removeClass('close-menu');
                $(this).addClass('open-menu');
                $('body').removeClass('modal-open');
            }       
        });


    }

    if ($('.btn-menu').length) {

        $('.btn-menu').on('click', function () {
            $('.header-home').toggleClass('active'); 
        });


    }






}