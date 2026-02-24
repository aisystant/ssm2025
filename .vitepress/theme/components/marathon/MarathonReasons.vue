<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Swiper from 'swiper/bundle';

interface Slide {
    name: string,
    text: string,
    image: string,
    list: string[],
}

defineProps<{
    title: string,
    items: Slide[],
    footer?: string,
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
            670: {
                slidesPerView: 2,
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
    <section class="marathon-reasons">
        <div class="container-md">
            <h2 class="section-title" v-html="title"></h2>

            <div class="swiper" ref="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="slide in items" :key="JSON.stringify(slide)">
                        <div class="reason-card">
                            <div class="card-header" v-html="slide.name"></div>

                            <div class="card-image">
                                <img :src="`/images/${slide.image}`">
                            </div>

                            <div class="card-body">
                                <div class="card-title" v-html="slide.text"></div>
                                <ul class="card-list">
                                    <li
                                        v-for="item in slide.list"
                                        :key="item"
                                        v-html="item"></li>
                                </ul>
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

            <div class="section-footer" v-html="footer" v-if="footer"></div>
        </div>
    </section>
</template>
