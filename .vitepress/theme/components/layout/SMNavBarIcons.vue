<script setup lang="ts">
import SvgIcon from '../SvgIcon.vue'

defineProps<{
    items: {
        icon: string
        text: string
        link: string
        target?: string
        onlyDesktop?: boolean
    }[]
}>()
</script>

<template>
    <ul class="nav-icons">
        <template v-for="item in items" :key="item.text">
            <li v-if="!item.onlyDesktop">
                <a
                    :href="item.link.trim()"
                    :target="item.target ?? undefined">
                    <SvgIcon :name="item.icon" />
                </a>
            </li>
        </template>
    </ul>
</template>
