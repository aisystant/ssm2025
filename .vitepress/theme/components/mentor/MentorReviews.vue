<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue'
import MentorReviewsItem from './MentorReviewsItem.vue'
import Swiper from 'swiper/bundle';
import 'swiper/css/effect-fade'

const props = defineProps<{
    title: string,
    items: string[],
}>()

const swiper = ref<HTMLElement | null>(null)
const swiperInstance = ref<Swiper | null>(null)

const initSwiper = () => {
    swiperInstance.value = new Swiper(swiper.value!, {
        autoHeight: true,
        slidesPerView: 1,
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
    })
}

onMounted(async () => {
    if (swiper.value) initSwiper()
})

watch(() => props.items, async () => {
    await nextTick()
    swiperInstance.value?.update()
    swiperInstance.value?.slideTo(0)
})
</script>

<template>
    <section class="mentor-reviews" v-if="items">
        <div class="container">
            <h2 class="reviews-title" v-html="title"></h2>

            <div class="swiper" ref="swiper">
                <div class="swiper-wrapper">
                    <MentorReviewsItem
                    v-for="item in items" :key="item"
                    :path="item" />
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
