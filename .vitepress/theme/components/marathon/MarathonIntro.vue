<script setup lang="ts">
defineProps<{
    title: string,
    subtitle: string,
    description: string,
    image: string,
}>()
</script>

<template>
    <section class="marathon-intro">
        <div class="section-container">
            <div class="section-row">
                <div class="intro-body">
                    <div class="marathon-subtitle" v-html="subtitle" v-if="subtitle"></div>
                    <h1 class="marathon-title" v-html="title"></h1>

                    <div class="marathon-text" v-html="description" v-if="description"></div>
                </div>

                <div class="intro-image">
                    <img :src="`/images/${image}`" fetchpriority="high">
                </div>
            </div>
        </div>
    </section>
</template>
