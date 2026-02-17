<script setup lang="ts">
import MarathonIntro from './../marathon/MarathonIntro.vue'
import MarathonReasons from './../marathon/MarathonReasons.vue'
import MarathonBenefits from './../marathon/MarathonBenefits.vue'
import MarathonPractice from './../marathon/MarathonPractice.vue'
import MarathonStructure from './../marathon/MarathonStructure.vue'
import MarathonFeatures from './../marathon/MarathonFeatures.vue'
import MarathonTransformation from './../marathon/MarathonTransformation.vue'
import MarathonResult from './../marathon/MarathonResult.vue'
import MarathonApply from './../marathon/MarathonApply.vue'
import MarathonConditions from './../marathon/MarathonConditions.vue'
import MarathonRecruitment from './../marathon/MarathonRecruitment.vue'
import FAQ from './../FAQ.vue'
import { useData } from '../../composables/data'

const { frontmatter } = useData()
</script>

<template>
    <MarathonIntro
    :title="frontmatter.pagetitle ?? frontmatter.title"
    :subtitle="frontmatter.subtitle"
    :description="frontmatter.description"
    :image="frontmatter.image" />

    <MarathonReasons
    :title="frontmatter.reasons.title"
    :items="frontmatter.reasons.items"
    :footer="frontmatter.reasons.footer"
    v-if="frontmatter.reasons" />

    <MarathonBenefits
    :title="frontmatter.benefits.title"
    :items="frontmatter.benefits.items"
    v-if="frontmatter.benefits" />

    <MarathonPractice
    :title="frontmatter.practice.title"
    :items="frontmatter.practice.items"
    v-if="frontmatter.practice" />

    <MarathonStructure
    :title="frontmatter.structure.title"
    :items="frontmatter.structure.items"
    v-if="frontmatter.structure" />

    <MarathonFeatures
    :title="frontmatter.features.title"
    :items="frontmatter.features.items"
    v-if="frontmatter.features" />

    <MarathonTransformation
    :title="frontmatter.transformation.title"
    :items="frontmatter.transformation.items"
    v-if="frontmatter.transformation" />

    <MarathonResult
    :title="frontmatter.result.title"
    :text="frontmatter.result.text"
    :items="frontmatter.result.items"
    v-if="frontmatter.result" />

    <MarathonApply
    :title="frontmatter.apply.title"
    :head="frontmatter.apply.head"
    :body="frontmatter.apply.body"
    :button="frontmatter.apply.button"
    v-if="frontmatter.apply" />

    <MarathonConditions
    :title="frontmatter.conditions.title"
    :items="frontmatter.conditions.items"
    v-if="frontmatter.conditions" />

    <MarathonRecruitment
    :title="frontmatter.howtoget.title"
    :items="frontmatter.howtoget.items"
    :text="frontmatter.howtoget.text"
    :button="frontmatter.howtoget.button"
    v-if="frontmatter.howtoget" />

    <FAQ
    :title="frontmatter.faq.title"
    :items="frontmatter.faq.items"
    v-if="frontmatter.faq" />
</template>
