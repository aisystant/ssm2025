<script setup lang="ts">
defineProps<{
    id: string,
    title: string
    image: string
    text?: string
}>()
</script>

<template>
    <a :href="`/quiz/${id}`" class="quiz-card">
        <div class="card-image">
            <img :src="`/images/${image}`" :alt="title">
        </div>
        <div class="card-title" v-html="title"></div>
        <div class="card-text" v-html="text" v-if="text"></div>
    </a>
</template>
