<script setup lang="ts">
defineProps<{
    id: string,
    title: string
    image: string
    author?: string
}>()
</script>

<template>
    <a :href="`/articles/${id}`" class="article-card">
        <div class="card-image">
            <img :src="`/images/${image}`" :alt="title">
        </div>
        <div class="card-body">
            <div class="card-title" v-html="title"></div>
            <div class="card-text" v-html="author" v-if="author"></div>
        </div>
    </a>
</template>
