<script setup lang="ts">
import { ref, nextTick, watch, onMounted } from 'vue'
import SvgIcon from './SvgIcon.vue'
import Swiper from 'swiper/bundle'
import 'swiper/css/effect-fade'

import { useData } from './../composables/data'
import { useDisplay } from './../composables/media'

const { frontmatter } = useData()
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
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 24,
        effect: 'fade',
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
    })
}
</script>

<template>
    <section class="qualification">
        <h2 class="qualification-title" v-html="frontmatter.levels.title"></h2>

        <div class="swiper" ref="swiper" v-if="isDevice">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in frontmatter.levels.items" :key="JSON.stringify(item)">
                    <div v-html="item.name" class="level-name"></div>
                    <div class="mt-3">
                        <div v-html="frontmatter.levels.head.required" class="label"></div>
                        <div v-html="item.required" class="level-cell"></div>
                    </div>
                    <div class="mt-3">
                        <div v-html="frontmatter.levels.head.eqf" class="label"></div>
                        <div v-html="item.eqf" class="level-cell"></div>
                    </div>
                </div>
            </div>

            <div class="swiper-control">
                <div class="button-prev">
                    <SvgIcon name="chevron-left" />
                </div>
                <div class="button-next">
                    <SvgIcon name="chevron-right" />
                </div>
            </div>
        </div>

        <template v-else>
            <div class="qualification__head" v-if="frontmatter.levels.head">
                <div class="table-col">
                    <span v-html="frontmatter.levels.head.name"></span>
                </div>
                <div class="table-col">
                    <span v-html="frontmatter.levels.head.required"></span>
                </div>
                <div class="table-col">
                    <span v-html="frontmatter.levels.head.eqf"></span>
                </div>
            </div>

            <div class="qualification__row" v-for="item in frontmatter.levels.items" :key="JSON.stringify(item)">
                <div class="table-col">
                    <span v-html="item.name" class="level-name"></span>
                </div>
                <div class="table-col">
                    <span v-html="item.required" class="level-cell"></span>
                </div>
                <div class="table-col">
                    <span v-html="item.eqf" class="level-cell"></span>
                </div>
            </div>
        </template>
    </section>
</template>
