<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SvgIcon from '../SvgIcon.vue'
import MentorBooksItem from './MentorBooksItem.vue'
import BookModal from '../books/BookModal.vue'
import Swiper from 'swiper/bundle'

defineProps<{
    title: string,
    items: string[],
}>()

const swiper = ref<HTMLElement | null>(null)
const isOpen = ref(false)
const current = ref('')

const initSwiper = () => {
    new Swiper(swiper.value!, {
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            540: {
                slidesPerView: 2,
                spaceBetween: 4,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 4,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 8,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 8,
            },
            1400: {
                slidesPerView: 5,
                spaceBetween: 16,
            }
        }
    });
}

function openModal(path: string) {
    current.value = path
    isOpen.value = true
}

function closeModal() {
    current.value = ''
    isOpen.value = false
}

onMounted(() => {
    if (swiper.value) initSwiper()
})
</script>

<template>
    <section class="carousel-section">
        <div class="carousel-wrap">
            <div class="swiper" ref="swiper">
                <div class="swiper-header">
                    <h2 class="swiper-title" v-html="title"></h2>
                    <div class="swiper-control">
                        <div class="button-prev">
                            <SvgIcon name="chevron-left" />
                        </div>
                        <div class="button-next">
                            <SvgIcon name="chevron-right" />
                        </div>
                    </div>
                </div>

                <div class="swiper-wrapper" v-if="items">
                    <MentorBooksItem
                    v-for="item in items"
                    :key="item"
                    :path="item"
                    @show="openModal(item)" />
                </div>
            </div>
        </div>
    </section>

    <BookModal
    :path="current"
    @close="closeModal"
    v-if="current && isOpen" />
</template>

<style lang="scss" scoped>
.carousel-wrap {
    $gap: .5rem;
    margin-left: -$gap;
    margin-right: -$gap;

    & .swiper-header {
        margin-left: $gap;
        margin-right: $gap;
    }
}
</style>
