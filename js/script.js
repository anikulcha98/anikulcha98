$(document).ready(function(){
    $('.carousel__inner').slick({
        dots: false,
        speed: 1500,
        slidesToShow: 1,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="icon/left.png" alt="left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icon/right.png" alt="left"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
    $('.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide (item) {
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__link_back');

    // modal

    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn()
    });

    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow')
    });
    // $('.overlay').on('click', function(){
    //     $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    // })
    $('.button_mini').each(function(i){
        $(this).on('click', function(){
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn();
        })
    })
    // $("#consultation-form").validate();
    // $("#consultation form").validate({
    //     rules: {
    //         name: {
    //             required: true,
    //             minlenght: 2
    //         },
    //         phone: {
    //             required: true,
    //             minlenght: 11
    //         },
    //         email: {
    //             required: true,
    //             email: true  
    //     }
        
    //     },
    //     messages: {
    //         name: {
    //             required: 'поле заполни',
    //             minlenght: jQuery.validator.format('Введите {0} символов')
    //         },
    //         phone: {
    //             required: "номер введи",
    //             minlenght: jQuery.validator.format('введите полный номер')
    //         },
    //         email: {
    //             required: 'заполните это поле',
    //             email: 'Введите коректный адрес'
    //         }
    //     }
    // });
    // $("#order form").validate();
    function valideForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlenght: 2
                },
                phone: {
                    required: true,
                    minlenght: 11
                },
                email: {
                    required: true,
                    email: true  
            }
            
            },
            messages: {
                name: {
                    required: 'поле заполни',
                    minlenght: jQuery.validator.format('Введите {0} символов')
                },
                phone: {
                    required: "номер введи",
                    minlenght: jQuery.validator.format('введите полный номер')
                },
                email: {
                    required: 'заполните это поле',
                    email: 'Введите коректный адрес'
                }
            }
        });
    }
    valideForms("#consultation-form")
    valideForms("#consultation form")
    valideForms("#order form")

    $('input[name=phone]').mask("+7 (999) 999-99-99");


    // scroll

    $(window).scroll(function(){
        if($(this).scrollTop () > 1600){
            $('.pageup').fadeIn()
        } else { 
            $('.pageup').fadeOut()
        }
    });

    $('a[href^="#"]').click(function(){
        let _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    })

    new WOW().init();

})