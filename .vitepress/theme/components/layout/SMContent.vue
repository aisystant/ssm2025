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
import SMStarting from '../pages/SMStarting.vue'
import SMProducts from '../pages/SMProducts.vue'
import SMSubscribe from '../pages/SMSubscribe.vue'
import SMContacts from '../pages/SMContacts.vue'
import SMAboutUs from '../pages/SMAboutUs.vue'
import SMStack from '../pages/SMStack.vue'
import SMOffer from '../pages/SMOffer.vue'
import SMBenefit from '../pages/SMBenefit.vue'
import SMArticles from '../pages/SMArticles.vue'
import SMArticlePage from '../pages/SMArticlePage.vue'
import SMResearch from '../pages/SMResearch.vue'
import SMAmbassador from '../pages/SMAmbassador.vue'
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
        <SMStarting v-else-if="frontmatter.layout === 'starting'" />
        <SMProducts v-else-if="frontmatter.layout === 'products'" />
        <SMSubscribe v-else-if="frontmatter.layout === 'subscribe'" />
        <SMContacts v-else-if="frontmatter.layout === 'contacts'" />
        <SMAboutUs v-else-if="frontmatter.layout === 'about'" />
        <SMStack v-else-if="frontmatter.layout === 'stack'" />
        <SMOffer v-else-if="frontmatter.layout === 'offer'" />
        <SMBenefit v-else-if="frontmatter.layout === 'yougetit'" />
        <SMArticles v-else-if="frontmatter.layout === 'articles'" />
        <SMArticlePage v-else-if="frontmatter.layout === 'article'" />
        <SMResearch v-else-if="frontmatter.layout === 'research'" />
        <SMAmbassador v-else-if="frontmatter.layout === 'ambassador'" />
        <SMSimplePage v-else />
    </main>
</template>
