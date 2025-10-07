<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    step: number,
    length: number,
}>()

const progress = computed(() => {
    return Math.ceil(100 / props.length * props.step);
})
</script>

<template>
    <div class="progress">
        <div
            class="progress-bar"
            role="progressbar"
            :style="`width: ${progress}%`"
            :aria-valuenow="progress"
            aria-valuemin="0"
            aria-valuemax="100">
        </div>
    </div>
</template>
