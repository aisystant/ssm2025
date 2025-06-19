<script setup lang="ts">
defineProps<{
    title: string,
    image: string,
    items: {
        name: string
        text: string
    }[]
}>()
</script>

<template>
    <section class="program-system">
        <div class="container">
            <h2 class="section-title" v-html="title"></h2>

            <div class="section-row">
                <div class="section-body">
                    <div class="system-card" v-for="item in items" :key="JSON.stringify(item)">
                        <div class="card-title" v-html="item.name"></div>
                        <div class="card-text" v-html="item.text"></div>
                    </div>
                </div>

                <div class="section-image">
                    <img :src="`/images/${image}`" :alt="title">
                </div>
            </div>
        </div>
    </section>
</template>
