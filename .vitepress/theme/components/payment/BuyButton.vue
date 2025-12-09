<script setup lang="ts">
defineProps<{
    name?: string,
    link: string,
}>()

const emit = defineEmits<{
    (e: 'click'): void
}>()
</script>

<template>
    <a
        :href="link.trim()"
        @click="emit('click')"
        class="btn"
        target="_blank"
        rel="nofollow noopener">
        {{ name || 'Купить' }}
    </a>
</template>
