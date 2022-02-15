const breakpoint = window.matchMedia("(min-width:1339px)");

const breakpointChecker = function () {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {
        // clean up old instances and inline styles when available
        if (mySwiper !== undefined) mySwiper.destroy(true, true);

        // or/and do nothing
        return;

        // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
        // fire small viewport version of swiper
        return mySwiper;
    }
};

const mySwiper = new Swiper(".idc-swiper", {
    // Default parameters
    loop: false,
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 25,

    breakpoints: {
        // when window width is >= 320px
        320: {
            spaceBetween: 10,
        },
        // when window width is >= 480px
      
        // when window width is >= 640px
        700: {
            spaceBetween: 25,
        },
    },
    scrollbar: {
        el: ".idc-swiper-scrollbar",
        draggable: true,
    },
});
