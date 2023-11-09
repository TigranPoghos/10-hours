document.addEventListener("DOMContentLoaded", function(){ 

var swiper = new Swiper(".mySwiper", {
    loop: true,
    breakpoints: {
        375: {
            slidesPerView:1,
            spaceBetween:0,
        },

        768: {
            slidesPerView:2,
            spaceBetween:16,
        },

        1024: {
            slidesPerView:3,
            spaceBetween:16,
        },

        1439: {
            slidesPerView:4,
            spaceBetween:16,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

var swiper = new Swiper(".mySwiper__2", {
    loop: true,
    breakpoints: {
        375: {
            slidesPerView:1,
            spaceBetween:0,
        },

        1024: {
            slidesPerView:2,
            spaceBetween:30,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

var swiper = new Swiper(".mizantin__gallery-adap", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

var swiper = new Swiper(".rule__swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})






})