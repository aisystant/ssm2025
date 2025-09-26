<script setup lang="ts">
import SvgIcon from '../SvgIcon.vue'
import { Button } from '../../interfaces'

interface IconButton extends Button {
    onlyDesktop?: boolean
}

defineProps<{
    buttons: IconButton[]
}>()

const emit = defineEmits<{
    (e: 'close'): void
}>()
</script>

<template>
    <ul class="nav-icons">
        <template v-for="button in buttons" :key="button.name">
            <li v-if="!button.onlyDesktop && button.icon">
                <a
                    :href="button.link.trim()"
                    :target="button.target ?? undefined"
                    :rel="button.rel ?? undefined"
                    @click="emit('close')">
                    <SvgIcon :name="button.icon" />
                </a>
            </li>
        </template>
    </ul>
</template>
