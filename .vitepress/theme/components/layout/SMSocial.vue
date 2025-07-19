<script setup lang="ts">
import SvgIcon from '../SvgIcon.vue'
import { useData } from '../../composables/data'

const { theme } = useData()
</script>

<template>
    <div class="media-links" v-if="theme.socialLinks.length">
        <div class="media-item" v-for="item in theme.socialLinks" :key="item.icon">
            <a :href="item.link.trim()" target="_blank" rel="nofollow">
                <SvgIcon :name="item.icon" />
            </a>
        </div>
    </div>
</template>
