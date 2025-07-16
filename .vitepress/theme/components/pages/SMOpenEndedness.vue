<script setup lang="ts">
import OpenEndednessIntro from './../openendedness/OpenEndednessIntro.vue'
import OpenEndednessWhatIs from './../openendedness/OpenEndednessWhatIs.vue'
import OpenEndednessBenefits from './../openendedness/OpenEndednessBenefits.vue'
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

    <OpenEndednessBenefits
    :title="frontmatter.benefits.title"
    :items="frontmatter.benefits.items"
    :buttons="frontmatter.benefits.buttons"
    v-if="frontmatter.benefits" />
</template>
