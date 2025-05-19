<script lang="ts" setup>
import { isActive } from '../../shared'
import { useData } from '../../composables/data'

defineProps<{
    text: string
    items: any[]
}>()

const emit = defineEmits<{
    (e: 'close'): void
}>()

const { page } = useData()
</script>

<template>
    <button class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
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
                :href="item.link"
                @click="emit('close')">
                {{ item.text }}
            </a>
        </template>
    </div>
</template>
