<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SvgIcon from './SvgIcon.vue'
import { initCardSwiper } from '../support/swiper'

interface Slide {
    head: string
    image: string
    text: string
}

interface Data {
    title: string
    slides: Slide[]
}

defineProps<{
    data: Data,
    dark?: boolean
}>()

const swiper = ref<HTMLElement | null>(null)

onMounted(() => {
    if (swiper.value) initCardSwiper(swiper.value)
})
</script>

<template>
    <section class="feature-section">
        <div class="carousel-section mb-0">
            <div class="swiper" ref="swiper">
                <div class="swiper-header">
                    <h2 class="swiper-title" v-html="data.title"></h2>
                    <div class="swiper-control">
                        <div class="button-prev">
                            <SvgIcon name="chevron-left" />
                        </div>
                        <div class="button-next">
                            <SvgIcon name="chevron-right" />
                        </div>
                    </div>
                </div>

                <div class="swiper-wrapper" v-if="data.slides">
                    <div class="swiper-slide" v-for="slide in data.slides" :key="JSON.stringify(slide)">
                        <div class="feature-card">
                            <div class="card-body">
                                <div v-html="slide.head" class="card-title"></div>
                                <div class="card-image">
                                    <img :src="`/images/${slide.image}`" :alt="slide.head">
                                </div>
                                <div v-html="slide.text" class="card-text"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
