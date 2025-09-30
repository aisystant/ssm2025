<script setup lang="ts">
import SvgIcon from '../SvgIcon.vue'
import { ref, onMounted } from 'vue'
import { Button } from '../../interfaces'

defineProps<{
    buttons: Button[]
}>()

const tooltips = ref<(HTMLElement | null)[]>([])

onMounted(() => {
    if (typeof window !== 'undefined' && tooltips.value) {
        import('bootstrap/js/dist/tooltip').then((bootstrap) => {
            const Tooltip = bootstrap.default || bootstrap

            tooltips.value.forEach((tooltip) => {
                if (tooltip) new Tooltip(tooltip, { placement: 'bottom' })
            })
        })
    }
})
</script>

<template>
    <div class="button-wrapper">
        <template v-for="button in buttons" :key="button.name">
            <a
                class="btn"
                ref="tooltips"
                :href="button.link.trim()"
                :data-bs-title="button.name"
                :aria-label="button.name"
                :target="button.target ?? undefined"
                :rel="button.rel ?? undefined"
                v-if="button.icon">
                <SvgIcon :name="button.icon" />
            </a>
        </template>
    </div>
</template>
