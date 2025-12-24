<script setup lang="ts">
import OpenEndednessIntro from './../openendedness/OpenEndednessIntro.vue'
import OpenEndednessWhatIs from './../openendedness/OpenEndednessWhatIs.vue'
import OpenEndednessBenefits from './../openendedness/OpenEndednessBenefits.vue'
import OpenEndednessComponents from './../openendedness/OpenEndednessComponents.vue'
import OpenEndednessComparing from './../openendedness/OpenEndednessComparing.vue'
import OpenEndednessApply from './../openendedness/OpenEndednessApply.vue'
import OpenEndednessCourses from './../openendedness/OpenEndednessCourses.vue'
import OpenEndednessResources from './../openendedness/OpenEndednessResources.vue'
import ReviewSwiper from './../ReviewSwiper.vue'
import CallToAction from './../CallToAction.vue'
import FAQ from './../FAQ.vue'
import { useData } from '../../composables/data'

const { frontmatter } = useData()
</script>

<template>
    <OpenEndednessIntro
    :title="frontmatter.pagetitle ?? frontmatter.title"
    :description="frontmatter.description"
    :image="frontmatter.image"
    :buttons="frontmatter.buttons" />

    <OpenEndednessWhatIs
    :title="frontmatter.whatis.title"
    :text="frontmatter.whatis.text"
    :items="frontmatter.whatis.items"
    v-if="frontmatter.whatis" />

    <OpenEndednessCourses
    :title="frontmatter.courses.title"
    :image="frontmatter.courses.image"
    :items="frontmatter.courses.items"
    v-if="frontmatter.courses" />

    <OpenEndednessComponents
    :title="frontmatter.components.title"
    :subtitle="frontmatter.components.text"
    :items="frontmatter.components.items"
    v-if="frontmatter.components" />

    <OpenEndednessComparing
    :title="frontmatter.comparing.title"
    :head="frontmatter.comparing.head"
    :items="frontmatter.comparing.items"
    v-if="frontmatter.comparing" />

    <OpenEndednessApply
    :title="frontmatter.apply.title"
    :subtitle="frontmatter.apply.text"
    :items="frontmatter.apply.items"
    :checks="frontmatter.apply.checks"
    :footer="frontmatter.apply.footer"
    v-if="frontmatter.apply" />

    <ReviewSwiper
    :title="frontmatter.reviews.title"
    :items="frontmatter.reviews.items"
    v-if="frontmatter.reviews" />

    <OpenEndednessBenefits
    :title="frontmatter.benefits.title"
    :items="frontmatter.benefits.items"
    :buttons="frontmatter.benefits.buttons"
    v-if="frontmatter.benefits" />

    <OpenEndednessResources
    :title="frontmatter.resources.title"
    :cards="frontmatter.resources.cards"
    v-if="frontmatter.resources" />

    <FAQ
    :title="frontmatter.faq.title"
    :items="frontmatter.faq.items"
    v-if="frontmatter.faq" />

    <CallToAction
    :title="frontmatter.action.title"
    :buttons="frontmatter.action.buttons"
    :text="frontmatter.action.text"
    v-if="frontmatter.action" />
</template>
