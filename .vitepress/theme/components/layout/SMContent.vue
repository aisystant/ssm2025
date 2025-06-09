<script setup lang="ts">
import { useData } from '../../composables/data'
import SMHome from '../pages/SMHome.vue'
import SMPrograms from '../pages/SMPrograms.vue'
import SMSchedule from '../pages/SMSchedule.vue'
import SMTeam from '../pages/SMTeam.vue'
import SMQualification from '../pages/SMQualification.vue'
import SMSubscribe from '../pages/SMSubscribe.vue'
import NotFound from '../pages/NotFound.vue'
import SMSimplePage from '../pages/SMSimplePage.vue'

const { page, frontmatter } = useData()
</script>

<template>
    <main>
        <NotFound v-if="page.isNotFound" />
        <SMHome v-else-if="frontmatter.layout === 'home'" />
        <SMPrograms v-else-if="frontmatter.layout === 'programs'" />
        <SMSchedule v-else-if="frontmatter.layout === 'schedule'" />
        <SMTeam v-else-if="frontmatter.layout === 'team'" />
        <SMQualification v-else-if="frontmatter.layout === 'qualification'" />
        <SMSubscribe v-else-if="frontmatter.layout === 'subscribe'" />
        <SMSimplePage v-else />
    </main>
</template>
