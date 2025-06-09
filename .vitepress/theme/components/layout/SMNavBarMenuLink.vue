<script lang="ts" setup>
import type { DefaultTheme } from 'vitepress/theme'
import { useData } from '../../composables/data'
import { isActive } from '../../shared'

defineProps<{
    item: DefaultTheme.NavItemWithLink
}>()

const emit = defineEmits<{
    (e: 'close'): void
}>()

const { page } = useData()
</script>

<template>
    <a
        :class="[
            'nav-link',
            { 'active': isActive(page.relativePath, item.link) },
            { 'accent': item.accent }
        ]"
        :href="item.link.trim()"
        :target="item.target ?? undefined"
        @click="emit('close')">
        {{ item.text }}
    </a>
</template>
