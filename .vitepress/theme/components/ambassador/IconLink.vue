<script setup lang="ts">
import SvgIcon from '../SvgIcon.vue'

defineProps<{
    name: string,
    icon: string,
    link: string,
    isText?: boolean,
}>()
</script>

<template>
    <a
        :href="link.trim()"
        :title="!isText ? name : undefined"
        class="btn"
        target="_blank">
        <SvgIcon :name="icon" />
        <template v-if="isText">
            {{ name }}
        </template>
    </a>
</template>
