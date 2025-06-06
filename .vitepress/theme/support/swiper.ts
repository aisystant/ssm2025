import Swiper from 'swiper/bundle';

export const initCardSwiper = (swiperElement: HTMLElement | null) => {
    if (!swiperElement) return;

    new Swiper(swiperElement, {
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
        breakpoints: {
            0: {
                loop: true,
                centeredSlides: false,
                slidesPerView: 1,
                spaceBetween: 16,
            },
            460: {
                loop: true,
                centeredSlides: true,
                slidesPerView: 2,
                spaceBetween: 16,
            },
            576: {
                loop: false,
                centeredSlides: false,
                slidesPerView: 2,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 16,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 24,
            }
        }
    });
}
