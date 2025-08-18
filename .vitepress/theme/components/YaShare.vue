<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useData } from '../composables/data'

const { theme, frontmatter } = useData()
const share = ref<HTMLElement | null>(null)

onMounted(() => {
    if (typeof window !== 'undefined' && share.value) {
        const script = document.createElement('script')
        script.src = 'https://yastatic.net/share2/share.js'
        script.async = true
        document.head.appendChild(script)
    }
})
</script>

<template>
    <div class="share">
        <div class="me-2">{{ theme.share.title }}</div>

        <div class="ya-share2"
            ref="share"
            data-curtain
            data-color-scheme="whiteblack"
            :data-services="theme.share.services"
            :data-title="frontmatter.title"
            :data-image="frontmatter.image ? `${theme.share.hostname}/images/${frontmatter.image}` : undefined">
        </div>
    </div>
</template>
