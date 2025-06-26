<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { teamPages } from './../support/members'
import Swiper from 'swiper/bundle';

const props = defineProps<{
    title: string,
    items: string[]
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
            576: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 16,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 24,
            }
        }
    });
}

const members = computed(() => {
    if (!props.items) return null

    return teamPages.value.filter(member => props.items.includes(member.id))
            .sort((a, b) => props.items.indexOf(a.id) - props.items.indexOf(b.id))
})

onMounted(() => {
    if (members.value && swiper.value) initSwiper()
})
</script>

<template>
    <section class="program-teachers" v-if="members">
        <h2 class="section-title" v-html="title"></h2>

        <div class="swiper" ref="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="member in members" :key="member.id">
                    <a :href="`/team/${member.id}/`" class="teacher-card">
                        <div class="card-image">
                            <img
                            :src="`/images/team/${member.image}`"
                            :alt="`${member.surname} ${member.name}`">
                        </div>

                        <div class="card-body">
                            <div class="card-title">
                                {{ member.surname }} {{ member.name }}
                            </div>
                            <div
                                class="card-small"
                                v-html="member.post"
                                v-if="member.post">
                            </div>
                            <div
                                class="card-text"
                                v-html="member.description"
                                v-if="member.description">
                            </div>
                        </div>
                    </a>
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
