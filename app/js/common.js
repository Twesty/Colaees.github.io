$(function() {

    // Slider

    {
        let items = $('.banner__items');

        items.slick({
            slidesToShow: 1,
            fade: true,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true
        })
    }

    // Main menu dropdown

    if($(window).width() < 767) {
        {
            let bars = $('.header__bars');
            let menu = $('.header__nav');
            let close = $('.main-menu__close');

            bars.on('click', function () {
               menu.stop(true).slideToggle(200);
            });

            close.on('click', function () {
                menu.slideUp(200);
            });

            let mainItems = $('.main-menu__item--has-children');

            $.each(mainItems, function () {
                let trigger = $( this ).find('> span');
                let dropdown = $( this ).find('.main-menu__submenu');

                trigger.on('click', function () {
                    dropdown.stop(true).slideToggle(200);
                });
            });

            let secondaryItems = $('.main-menu__submenu-item--has-children');

            $.each(secondaryItems, function () {
                let trigger = $( this );
                let dropdown = $( this ).find('ul');

                trigger.on('click', function () {
                    dropdown.stop(true).slideToggle(200);
                });
            });
        }
    } else {
        {
            let mainItems = $('.main-menu__item--has-children');

            $.each(mainItems, function () {
                let trigger = $( this ).find('> span');
                let dropdown = $( this ).find('.main-menu__submenu');

                trigger.on('mouseenter', function () {
                    dropdown.stop(true).slideDown(200);
                });

                dropdown.on('mouseleave', function () {
                    dropdown.stop(true).slideUp(200);
                })
            });

            let secondaryItems = $('.main-menu__submenu-item--has-children');

            $.each(secondaryItems, function () {
                let trigger = $( this );
                let dropdown = $( this ).find('ul');

                trigger.on('mouseenter', function () {
                    dropdown.stop(true).slideDown(200);
                });

                trigger.on('mouseleave', function () {
                    dropdown.stop(true).slideUp(200);
                });

                dropdown.on('mouseleave', function () {
                    dropdown.stop(true).slideUp(200);
                })
            });
        }
    }

});
