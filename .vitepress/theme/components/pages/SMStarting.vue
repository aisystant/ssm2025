<script setup lang="ts">
import StartingIntro from './../starting/StartingIntro.vue'
import StepRegistration from './../starting/StepRegistration.vue'
import StepProgram from './../starting/StepProgram.vue'
import StepFormat from './../starting/StepFormat.vue'
import StepInformation from './../starting/StepInformation.vue'
import CallToAction from './../starting/CallToAction.vue'
import AnyQuestions from './../AnyQuestions.vue'
import { useData } from '../../composables/data'

const { frontmatter } = useData()
</script>

<template>
    <StartingIntro
    :title="frontmatter.pagetitle ?? frontmatter.title"
    :description="frontmatter.description"
    :image="frontmatter.image"
    :buttons="frontmatter.buttons" />

    <div class="howtostart-steps">
        <StepRegistration
        :title="frontmatter.registration.title"
        :text="frontmatter.registration.text"
        :image="frontmatter.registration.image"
        :button="frontmatter.registration.button"
        v-if="frontmatter.registration" />

        <StepProgram
        :title="frontmatter.program.title"
        :items="frontmatter.program.items"
        v-if="frontmatter.program" />

        <StepFormat
        :title="frontmatter.format.title"
        :items="frontmatter.format.items"
        v-if="frontmatter.format" />

        <StepInformation
        :title="frontmatter.information.title"
        :items="frontmatter.information.items"
        v-if="frontmatter.information" />
    </div>

    <AnyQuestions />

    <CallToAction
    :title="frontmatter.action.title"
    :buttons="frontmatter.action.buttons"
    :text="frontmatter.action.text"
    v-if="frontmatter.action" />
</template>
