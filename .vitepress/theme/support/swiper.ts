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
                slidesPerView: 1,
                spaceBetween: 16,
            },
            540: {
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

export const initProgramSwiper = (swiperElement: HTMLElement | null) => {
    if (!swiperElement) return;

    new Swiper(swiperElement, {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 32,
            },
        }
    });
}
