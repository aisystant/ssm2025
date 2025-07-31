<script setup lang="ts">
defineProps<{
    title: string,
    items: {
        name: string
        text?: string
    }[]
}>()
</script>

<template>
    <section class="about-features">
        <div class="container">
            <h2 class="features-title" v-html="title"></h2>

            <div class="features-body">
                <div class="features-row" v-for="item in items" :key="item.name">
                    <div class="feature-road"></div>
                    <div class="feature-item">
                        <div class="card-title" v-html="item.name"></div>
                        <div class="card-text" v-html="item.text" v-if="item.text"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
