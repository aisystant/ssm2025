<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { isActive } from '../../shared'
import { useData } from '../../composables/data'
import bootstrap from 'bootstrap/js/dist/dropdown'

defineProps<{
    text: string
    items: any[]
}>()

const { page } = useData()
const Dropdown = bootstrap.default || bootstrap
const dropdownToggle = ref<HTMLElement | null>(null)

onMounted(() => {
    if (typeof window !== 'undefined' && dropdownToggle.value) {
        new Dropdown(dropdownToggle.value)
    }
})
</script>

<template>
    <button class="nav-link dropdown-toggle" ref="dropdownToggle" data-bs-toggle="dropdown">
        {{ text }}
    </button>

    <div class="dropdown-menu">
        <template v-for="item in items" :key="JSON.stringify(item)">
        <a
            :class="[
                'dropdown-item',
                { 'active': isActive(
                    page.relativePath,
                    item.activeMatch || item.link,
                    !!item.activeMatch)
                }
            ]"
            :href="item.link">
            {{ item.text }}
        </a>
        </template>
    </div>
</template>
