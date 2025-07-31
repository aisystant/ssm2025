<script setup lang="ts">
defineProps<{
    title: string,
    image: string,
    list: string[]
}>()
</script>

<template>
    <section class="about-place">
        <div class="container">
            <div class="section-row">
                <div class="section-body">
                    <h2 v-html="title"></h2>

                    <ul class="list-circle">
                        <template v-for="item in list" :key="item">
                            <li v-html="item"></li>
                        </template>
                    </ul>
                </div>

                <div class="section-image">
                    <img :src="`/images/${image}`">
                </div>
            </div>
        </div>
    </section>
</template>
