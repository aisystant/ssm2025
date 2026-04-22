<script setup lang="ts">
defineProps<{
    title: string,
    image: string,
    text: string[],
}>()
</script>

<template>
    <section class="openendedness-relevance">
        <div class="container">
            <div class="section-body">
                <div class="section-row">
                    <div class="section-text">
                        <h2 class="relevance-title" v-html="title"></h2>
                        <template v-for="item in text" :key="item">
                            <p v-html="item"></p>
                        </template>
                    </div>

                    <div class="section-image">
                        <img :src="`/images/${image}`" fetchpriority="high">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
