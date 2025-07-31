<script setup lang="ts">
import AboutIntro from './../about/AboutIntro.vue'
import AboutWhoWe from './../about/AboutWhoWe.vue'
import AboutPurpose from './../about/AboutPurpose.vue'
import AboutPrograms from './../about/AboutPrograms.vue'
import AboutInternships from './../about/AboutInternships.vue'
import AboutPlace from './../about/AboutPlace.vue'
import AboutEnvironment from './../about/AboutEnvironment.vue'
import AboutStability from './../about/AboutStability.vue'
import AboutFeatures from './../about/AboutFeatures.vue'
import AboutContacts from './../about/AboutContacts.vue'
import { useData } from '../../composables/data'

const { frontmatter } = useData()
</script>

<template>
    <AboutIntro
    :title="frontmatter.title"
    :description="frontmatter.description"
    :image="frontmatter.image" />

    <AboutWhoWe
    :title="frontmatter.whowe.title"
    :text="frontmatter.whowe.text"
    :items="frontmatter.whowe.items"
    v-if="frontmatter.whowe" />

    <AboutPurpose
    :title="frontmatter.purpose.title"
    :head="frontmatter.purpose.head"
    :items="frontmatter.purpose.items"
    v-if="frontmatter.purpose" />

    <AboutPrograms
    :title="frontmatter.programs.title"
    :subtitle="frontmatter.programs.subtitle"
    :items="frontmatter.programs.items"
    :button="frontmatter.programs.button"
    v-if="frontmatter.programs" />

    <AboutInternships
    :title="frontmatter.internships.title"
    :items="frontmatter.internships.items"
    v-if="frontmatter.internships" />

    <AboutPlace
    :title="frontmatter.place.title"
    :image="frontmatter.place.image"
    :list="frontmatter.place.list"
    v-if="frontmatter.place" />

    <AboutEnvironment
    :title="frontmatter.environment.title"
    :image="frontmatter.environment.image"
    :text="frontmatter.environment.text"
    :list="frontmatter.environment.list"
    :footer="frontmatter.environment.footer"
    v-if="frontmatter.environment" />

    <AboutStability
    :title="frontmatter.stability.title"
    :items="frontmatter.stability.items"
    v-if="frontmatter.stability" />

    <AboutFeatures
    :title="frontmatter.features.title"
    :items="frontmatter.features.items"
    v-if="frontmatter.features" />

    <AboutContacts
    :title="frontmatter.contacts.title"
    :items="frontmatter.contacts.items"
    :footer="frontmatter.contacts.footer"
    v-if="frontmatter.contacts" />
</template>
