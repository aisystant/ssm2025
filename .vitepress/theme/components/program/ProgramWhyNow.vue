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
    <section class="about-internships">
        <h2 class="internships-title" v-html="title"></h2>

        <div class="section-row">
            <div class="internships-item" v-for="item in items" :key="item.name">
                <div class="internship-card">
                    <div class="card-title" v-html="item.name"></div>
                    <div class="card-text" v-html="item.text" v-if="item.text"></div>
                </div>
            </div>
        </div>
    </section>
</template>
