<script setup lang="ts">
defineProps<{
    name: string,
    text: string,
}>()
</script>

<template>
    <div class="features-item">
        <div class="feature-head" v-html="name"></div>
        <div class="feature-body" v-html="text"></div>
    </div>
</template>
