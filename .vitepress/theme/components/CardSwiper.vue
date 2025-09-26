<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SvgIcon from './SvgIcon.vue'
import { initCardSwiper } from '../support/swiper'

interface Slide {
    link: string
    target?: string
    image?: string
    head?: string
    title?: string
    text?: string
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
    <section class="carousel-section">
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
                    <a
                        :href="slide.link.trim()"
                        class="carousel-card"
                        :style="slide.image ? `background-image: url(/images/${slide.image})` : undefined"
                        :target="slide.target ?? undefined"
                    >
                        <div :class="['card-body', {'inverse': dark}]">
                            <div v-html="slide.head" class="card-head" v-if="slide.head"></div>
                            <div v-html="slide.title" class="card-title" v-if="slide.title"></div>
                            <div v-html="slide.text" class="card-text" v-if="slide.text"></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
