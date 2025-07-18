<script setup lang="ts">
defineProps<{
    title: string,
    image?: string,
    items: string[]
}>()
</script>

<template>
    <section class="openendedness-courses">
        <h2 class="section-title" v-html="title"></h2>

        <div class="section-row">
            <div class="flex-grow-1">
                <ul class="courses-list">
                    <template v-for="item in items" :v-key="item">
                        <li v-html="item"></li>
                    </template>
                </ul>
            </div>

            <div class="section-image" v-if="image">
                <img :src="`/images/${image}`">
            </div>
        </div>
    </section>
</template>
