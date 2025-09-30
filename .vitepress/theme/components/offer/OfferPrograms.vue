<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { initProgramSwiper } from '../../support/swiper'

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

onMounted(() => {
    if (swiper.value) initProgramSwiper(swiper.value)
})
</script>

<template>
    <section class="offer-programs">
        <h2 class="section-title" v-html="title"></h2>

        <div class="swiper" ref="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="slide in items" :key="JSON.stringify(slide)">
                    <div class="slide-card">
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
