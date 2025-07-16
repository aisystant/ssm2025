<script setup lang="ts">
import { useData } from '../../composables/data'
import SMHome from '../pages/SMHome.vue'
import SMPrograms from '../pages/SMPrograms.vue'
import SMProgramPage from '../pages/SMProgramPage.vue'
import SMSchedule from '../pages/SMSchedule.vue'
import SMTeam from '../pages/SMTeam.vue'
import SMMentor from '../pages/SMMentor.vue'
import SMOpenEndedness from '../pages/SMOpenEndedness.vue'
import SMQualification from '../pages/SMQualification.vue'
import SMConsultation from '../pages/SMConsultation.vue'
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
        <SMProgramPage v-else-if="frontmatter.layout === 'program'" />
        <SMSchedule v-else-if="frontmatter.layout === 'schedule'" />
        <SMTeam v-else-if="frontmatter.layout === 'team'" />
        <SMMentor v-else-if="frontmatter.layout === 'mentor'" />
        <SMOpenEndedness v-else-if="frontmatter.layout === 'openendedness'" />
        <SMQualification v-else-if="frontmatter.layout === 'qualification'" />
        <SMConsultation v-else-if="frontmatter.layout === 'consultation'" />
        <SMSubscribe v-else-if="frontmatter.layout === 'subscribe'" />
        <SMSimplePage v-else />
    </main>
</template>
