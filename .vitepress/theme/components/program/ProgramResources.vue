<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Swiper from 'swiper/bundle';

interface Slide {
    image: string
    name: string
    text: string[]
    footer?: string
}

defineProps<{
    title: string,
    items: Slide[]
}>()

const swiper = ref<HTMLElement | null>(null)

const initSwiper = () => {
    new Swiper(swiper.value!, {
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 24,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            992: {
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
    <section class="program-resources">
        <div class="container">
            <h2 class="section-title" v-html="title"></h2>

            <div class="swiper" ref="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="slide in items" :key="JSON.stringify(slide)">
                        <div class="resource-card">
                            <div class="card-image">
                                <img :src="`/images/${slide.image}`" :alt="slide.name">
                            </div>
                            <div class="card-body">
                                <template v-for="item in slide.text" :key="JSON.stringify(item)">
                                    <p v-html="item"></p>
                                </template>
                            </div>
                            <div class="card-footer" v-html="slide.footer" v-if="slide.footer"></div>
                        </div>
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
