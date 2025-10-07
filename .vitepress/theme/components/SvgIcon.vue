<script setup lang="ts">
import { computed } from 'vue'
import { getIconId } from '../support/icons'

const props = defineProps<{
    name: string
}>()

const iconId = computed(() => {
    if (typeof window === 'undefined') return null
    return getIconId(props.name)
})

const className = computed(() => {
    return `svg-icon svg-icon--${props.name}`
})
</script>

<template>
    <svg :class="className" v-if="iconId">
        <use :xlink:href="`#${iconId}`"></use>
    </svg>
</template>
