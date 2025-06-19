<script setup lang="ts">
defineProps<{
    title: string,
    items: {
        button: string
        link: string
        text: string
        image: string
    }[],
}>()
</script>

<template>
    <section class="education-section" >
        <div class="container">
            <h2 class="section-title" v-html="title"></h2>

            <div class="section-row" v-if="items">
                <div class="section-col" v-for="item in items" :key="JSON.stringify(item)">
                    <div class="education-item">
                        <img :src="`/images/${item.image}`" :alt="item.button">
                        <div class="card-text" v-html="item.text"></div>
                        <a :href="item.link.trim()" class="btn">
                            {{ item.button }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
