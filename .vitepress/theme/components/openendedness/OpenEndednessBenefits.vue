<script setup lang="ts">
import { ref, watch, nextTick, onMounted } from 'vue'
import { useDisplay } from './../../composables/media'
import { Button } from '../../interfaces'
import SvgIcon from '../SvgIcon.vue'
import Swiper from 'swiper/bundle'

interface Card {
    name: string
    text?: string
    image: string
}

defineProps<{
    title: string,
    items: Card[],
    buttons?: Button[]
}>()

const { isDevice } = useDisplay()
const swiper = ref<HTMLElement | null>(null)

onMounted(update)
watch(isDevice, update)

async function update() {
    await nextTick()
    if (isDevice.value && swiper.value) initSwiper()
}

const initSwiper = () => {
    new Swiper(swiper.value!, {
        spaceBetween: 16,
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
            },
            576: {
                slidesPerView: 2,
            },
        },
    })
}
</script>

<template>
    <section class="openendedness-benefits">
        <h2 class="section-title" v-html="title"></h2>

        <div class="swiper" ref="swiper" v-if="isDevice">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in items" :v-key="item.name">
                    <div class="benefits-card">
                        <div class="card-body">
                            <div class="card-image">
                                <img :src="`/images/${item.image}`">
                            </div>
                            <div class="card-title" v-html="item.name"></div>
                            <div class="card-text" v-html="item.text" v-if="item.text"></div>
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

        <div class="section-row" v-else>
            <div class="section-col" v-for="item in items" :v-key="item.name">
                <div class="benefits-card">
                    <div class="card-body">
                        <div class="card-image">
                            <img :src="`/images/${item.image}`">
                        </div>
                        <div class="card-title" v-html="item.name"></div>
                        <div class="card-text" v-html="item.text" v-if="item.text"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="benefits-footer" v-if="buttons">
            <template v-for="button in buttons" :key="JSON.stringify(button)">
                <a
                    :href="button.link.trim()"
                    :class="`btn ${button.style || 'btn-outline'}`">
                    <SvgIcon :name="button.icon" v-if="button.icon" />
                    {{ button.name }}
                </a>
            </template>
        </div>
    </section>
</template>
