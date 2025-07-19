<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Swiper from 'swiper/bundle';

defineProps<{
    title: string,
    items: {
        author: string
        text: string
        link?: string
    }[]
}>()

const swiper = ref<HTMLElement | null>(null)

const initSwiper = () => {
    new Swiper(swiper.value!, {
        spaceBetween: 24,
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
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        }
    });
}

onMounted(() => {
    if (swiper.value) initSwiper()
})
</script>

<template>
    <section class="reviews" id="reviews">
        <div class="reviews-container">
            <h2 class="section-title" v-html="title"></h2>

            <div class="swiper-wrap">
                <div class="swiper" ref="swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="review in items" :key="JSON.stringify(review)">
                            <div class="review-card">
                                <div class="card-title" v-html="review.author"></div>
                                <div class="card-text" v-html="review.text"></div>

                                <div class="card-link" v-if="review.link">
                                    <a :href="review.link.trim()" target="_blank">
                                        Открыть отзыв
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
            </div>
        </div>
    </section>
</template>
