<script setup lang="ts">
defineProps<{
    title: string,
    items: string[]
}>()
</script>

<template>
    <section class="about-stability">
        <div class="section-row">
            <div class="stability-head">
                <h2 class="stability-title" v-html="title"></h2>
            </div>

            <div class="stability-body">
                <template v-for="item in items" :key="item">
                    <div class="stability-item" v-html="item"></div>
                </template>
            </div>
        </div>
    </section>
</template>
