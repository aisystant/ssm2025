<script setup lang="ts">
defineProps<{
    title: string,
    subtitle?: string,
}>()
</script>

<template>
    <header class="article__header">
        <div class="container">
            <div class="text-wrap">
                <nav class="article-nav">
                    <a href="/articles/">Все статьи</a>
                </nav>

                <h1 class="article-title">
                    {{ title }}
                </h1>

                <div class="article-subtitle" v-html="subtitle" v-if="subtitle"></div>
            </div>
        </div>
    </header>
</template>
