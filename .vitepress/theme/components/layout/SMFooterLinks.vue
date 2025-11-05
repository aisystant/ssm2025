<script lang="ts" setup>
import type { DefaultTheme } from 'vitepress/theme'

defineProps<{
    items: DefaultTheme.NavItemWithLink[]
}>()
</script>

<template>
    <div class="footer-links">
        <template
            v-for="item in items"
            :key="JSON.stringify(item)">
            <a :href="item.link.trim()">
                {{ item.text }}
            </a>
        </template>
    </div>
</template>
