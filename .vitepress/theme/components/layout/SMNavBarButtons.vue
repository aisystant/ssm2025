<script setup lang="ts">
import SvgIcon from '../SvgIcon.vue'
import { ref, onMounted } from 'vue'
import { useData } from '../../composables/data'

const { theme } = useData()
const buttons = ref<(HTMLElement | null)[]>([])

onMounted(() => {
    if (typeof window !== 'undefined' && buttons.value) {
        import('bootstrap/js/dist/tooltip').then((bootstrap) => {
            const Tooltip = bootstrap.default || bootstrap

            buttons.value.forEach((button) => {
                if (button) new Tooltip(button, { placement: 'bottom' })
            })
        })
    }
})
</script>

<template>
    <div class="button-wrapper" v-if="theme.expandButtons">
        <template v-for="item in theme.expandButtons" :key="JSON.stringify(item)">
            <a
                class="btn"
                ref="buttons"
                :href="item.link.trim()"
                :data-bs-title="item.text"
                :target="item.target ?? undefined">
                <SvgIcon :name="item.icon" />
            </a>
        </template>
    </div>
</template>
