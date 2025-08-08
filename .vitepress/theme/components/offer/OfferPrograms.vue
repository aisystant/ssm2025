<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Swiper from 'swiper/bundle';

interface Slide {
    image: string
    name: string
    text?: string
    link: string
}

defineProps<{
    title: string,
    items: Slide[],
}>()

const swiper = ref<HTMLElement | null>(null)

const initSwiper = () => {
    new Swiper(swiper.value!, {
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

onMounted(() => {
    if (swiper.value) initSwiper()
})
</script>

<template>
    <section class="offer-programs">
        <h2 class="section-title" v-html="title"></h2>

        <div class="swiper" ref="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="slide in items" :key="JSON.stringify(slide)">
                    <div class="offer-program">
                        <div class="card-body">
                            <div class="card-image">
                                <img :src="`/images/${slide.image}`" :alt="slide.name">
                            </div>

                            <div class="card-title" v-html="slide.name"></div>
                            <div class="card-text" v-html="slide.text"></div>

                            <a :href="slide.link.trim()" class="btn">
                                Поробнее о программе
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="swiper-control-line">
                <div class="button-prev"></div>
                <div class="swiper-pagination"></div>
                <div class="button-next"></div>
            </div>
        </div>
    </section>
</template>
