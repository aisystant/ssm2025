<script lang="ts" setup>
import type { DefaultTheme } from 'vitepress/theme'
import { useData } from '../../composables/data'
import { isActive } from '../../shared'

defineProps<{
    item: DefaultTheme.NavItemWithLink
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
        :href="item.link"
        :target="item.target ?? undefined">
        {{ item.text }}
    </a>
</template>
