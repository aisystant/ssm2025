<script setup lang="ts">
import { useData } from '../../composables/data'
import SMHome from '../pages/SMHome.vue'
import SMTeam from '../pages/SMTeam.vue'
import SMSubscribe from '../pages/SMSubscribe.vue'
import NotFound from '../pages/NotFound.vue'
import SMSimplePage from '../pages/SMSimplePage.vue'

const { page, frontmatter } = useData()
</script>

<template>
    <main>
        <NotFound v-if="page.isNotFound" />
        <SMHome v-else-if="frontmatter.layout === 'home'" />
        <SMTeam v-else-if="frontmatter.layout === 'team'" />
        <SMSubscribe v-else-if="frontmatter.layout === 'subscribe'" />
        <SMSimplePage v-else />
    </main>
</template>
