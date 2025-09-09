<script setup lang="ts">
import SvgIcon from '../SvgIcon.vue'
import { ButtonIcon } from '../../interfaces'

defineProps<{
    items: ButtonIcon[],
}>()
</script>

<template>
    <div class="media-links">
        <div class="media-item" v-for="item in items" :key="item.icon">
            <a :href="item.link.trim()" target="_blank" rel="nofollow">
                <SvgIcon :name="item.icon" />
            </a>
        </div>
    </div>
</template>
