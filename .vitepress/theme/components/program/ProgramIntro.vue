<script setup lang="ts">
import { useDisplay } from './../../composables/media'

const { isDevice } = useDisplay()

interface Education {
    title: string
    description?: string
    text: string
    button: string
    style?: string
    link: string
}

defineProps<{
    title: string,
    subtitle?: string,
    description?: string,
    image_pc: string,
    image_mob?: string,
    education?: Education[],
}>()
</script>

<template>
    <section class="program-intro">
        <div class="section-container">
            <div class="section-row">
                <div class="section-text">
                    <h1 class="program-title" v-html="title"></h1>
                    <div class="program-subtitle" v-html="subtitle" v-if="subtitle"></div>
                    <div class="program-text" v-html="description" v-if="description"></div>
                </div>

                <img
                    :src="`/images/${image_pc}`"
                    class="program-image"
                    :alt="title"
                    fetchpriority="high"
                    v-if="!isDevice">

                <img
                    :src="`/images/${image_mob}`"
                    class="program-image-mob"
                    :alt="title"
                    fetchpriority="high"
                    v-if="isDevice && image_mob">

                <div class="section-items" v-if="education">
                    <div class="program-education">
                        <div class="education-item" v-for="item in education" :key="JSON.stringify(item)">
                            <div class="education-card">
                                <div class="card-header" v-html="item.title"></div>
                                <div class="card-body">
                                    <div class="card-text">
                                        <p class="text-secondary" v-html="item.description" v-if="item.description"></p>
                                        <p class="fw-light" v-html="item.text"></p>
                                    </div>
                                    <a :href="item.link.trim()" :class="`btn ${item.style ?? 'btn-outline'}`">
                                        {{ item.button }}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
