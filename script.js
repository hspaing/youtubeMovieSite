var swiper = new swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, 
    navigator: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});