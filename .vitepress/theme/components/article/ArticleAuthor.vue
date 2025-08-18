<script setup lang="ts">
defineProps<{
    image: string,
    name: string,
    text?: string,
    link?: string,
}>()
</script>

<template>
    <div class="article-author">
        <a :href="link.trim()" class="card-image" v-if="link">
            <img :src="`/images/${image}`" :alt="name">
        </a>

        <div class="card-image" v-else>
            <img :src="`/images/${image}`" :alt="name">
        </div>

        <div class="card-title">{{ name }}</div>
        <div class="card-text" v-html="text"></div>
    </div>
</template>
