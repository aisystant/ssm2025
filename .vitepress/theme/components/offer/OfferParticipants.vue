<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Swiper from 'swiper/bundle';

interface Slide {
    image: string
    name: string
    link: string
}

defineProps<{
    title: string,
    items: Slide[],
}>()

const swiper = ref<HTMLElement | null>(null)

const initSwiper = () => {
    new Swiper(swiper.value!, {
        centerInsufficientSlides: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            576: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
            1400: {
                slidesPerView: 5,
                spaceBetween: 60,
            },
        }
    });
}

onMounted(() => {
    if (swiper.value) initSwiper()
})
</script>

<template>
    <section class="offer-participants">
        <div class="container">
            <h2 class="participants-title" v-html="title"></h2>

            <div class="swiper" ref="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="slide in items" :key="JSON.stringify(slide)">
                        <a
                            :href="slide.link.trim()"
                            :title="slide.name"
                            target="_blank"
                            rel="nofollow noopener">
                            <img
                                :src="`/images/${slide.image}`"
                                :alt="slide.name">
                        </a>
                    </div>
                </div>

                <div class="swiper-control-line">
                    <div class="button-prev"></div>
                    <div class="swiper-pagination"></div>
                    <div class="button-next"></div>
                </div>
            </div>
        </div>
    </section>
</template>
