

var Slider = document.querySelector('.idc-swiper'), mySwiper

let InitSwiper = function (slider) {
    mySwiper = new Swiper(slider, {
        // Default parameters
        loop: false,
        direction: "horizontal",
        slidesPerView: 5,
        spaceBetween: 25,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        touchReleaseOnEdges: true,
        allowTouchMove: true,
        /*    grabCursor: true, */
        watchOverflow: true,

        breakpoints: {
            // when window width is >= 320px
            320: {
                spaceBetween: 10,
                slidesPerView: "auto",
            },
            // when window width is >= 480px

            // when window width is >= 640px
            700: {
                spaceBetween: 25,
                slidesPerView: "auto",
            },
            // when window width is >= 1020px
            1020: {
                spaceBetween: 20,
                slidesPerView: "auto",

            },
            // when window width is >= 1340px
            1340: {
                spaceBetween: 25,
            }
        },
        scrollbar: {
            el: ".idc-swiper-scrollbar",
            draggable: true,
        },
    });
}

var mySwiper
if (Slider) InitSwiper(Slider)


