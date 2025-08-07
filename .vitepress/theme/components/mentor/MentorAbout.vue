<script setup lang="ts">
defineProps<{
    title: string,
    text: string[],
}>()
</script>

<template>
    <section class="mentor-about">
        <div class="container">
            <div class="section-body">
                <h2 class="about-title" v-html="title"></h2>

                <div class="about-text">
                    <template v-for="item in text" :key="item">
                        <p v-html="item"></p>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>
