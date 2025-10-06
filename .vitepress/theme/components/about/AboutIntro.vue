<script setup lang="ts">
defineProps<{
    title: string,
    image: string,
    description?: string,
}>()
</script>

<template>
    <section class="about-intro">
        <div class="section-container">
            <div class="section-row">
                <div class="intro-body">
                    <h1 class="about-title" v-html="title"></h1>
                    <div class="about-text" v-html="description" v-if="description"></div>
                </div>

                <div class="intro-image">
                    <img :src="`/images/${image}`" fetchpriority="high">
                </div>
            </div>
        </div>
    </section>
</template>