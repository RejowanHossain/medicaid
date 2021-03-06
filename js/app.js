$(document).ready(function() {
    //   "use strict";


    // search overlay toggle
    let searchContainer = $('#searchContainer');
    let searchBtn = $('#searchBtn');
    let searchClose = $('#searchClose');
    searchBtn.on('click', function() {
        searchContainer.addClass('search-active');
    })

    searchClose.on('click', function() {
        searchContainer.removeClass('search-active');
    })

    // delete confirmation popup

    $('.delete').on('click', function() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2B8FE5',
            cancelButtonColor: '#f03e56',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    })



    // hero video popup
    $(document).ready(function() {
        $('.popup-hero').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    });

    // meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: '991',
    });

    //classes tab with colorfull tab
    $('#colorful').colorfulTab();



    //   preloadder
    $(window).on('load', function() {
        //$("#loading").delay(2000).fadeOut(500);
        $("#loading").fadeOut(500);
    })

    // select tag style plugin

    $(document).ready(function() {
        $('.selectStyle').niceSelect();
    });


    // scroll to top
    //Top to back
    $(".top-btm").click(function() {
        $('html,body').animate({
            "scrollTop": "0"
        }, 1000)
    });

    //fade in fade out
    $(window).scroll(function() {
        var scrollValue = $(this).scrollTop();

        if (scrollValue >= 500) {
            $(".top-btm").fadeIn();
        } else {
            $(".top-btm").fadeOut();
        }
    });
    // hero slider
    $('.active-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="fas fa-arrow-right"></i></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fas fa-arrow-left"></i></button>'
    });


    // team slider
    $('.testimonial-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        // prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        // nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });



});