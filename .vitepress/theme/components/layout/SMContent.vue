<script setup lang="ts">
import { useData } from '../../composables/data'
import SMHome from '../pages/SMHome.vue'
import NotFound from '../pages/NotFound.vue'

const { page, frontmatter } = useData()
</script>

<template>
    <main>
        <NotFound v-if="page.isNotFound" />
        <SMHome v-else-if="frontmatter.layout === 'home'" />
    </main>
</template>
