<script setup lang="ts">
import SvgIcon from '../SvgIcon.vue'

defineProps<{
    name: string,
    icon: string,
    link: string,
}>()
</script>

<template>
    <a
        :href="link.trim()"
        :title="name"
        class="btn"
        target="_blank">
        <SvgIcon :name="icon" />
    </a>
</template>
