<script setup lang="ts">
import ProgramIntro from './../program/ProgramIntro.vue'
import ProgramResult from './../program/ProgramResult.vue'
import ProgramAudience from './../program/ProgramAudience.vue'
import ProgramObjectives from './../program/ProgramObjectives.vue'
import ProgramContent from './../program/ProgramContent.vue'
import FormatsComparing from './../program/FormatsComparing.vue'
import ProgramResources from './../program/ProgramResources.vue'
import ProgramPrerequisites from './../program/ProgramPrerequisites.vue'
import TrainingSystem from './../program/TrainingSystem.vue'
import StartSchedule from './../program/StartSchedule.vue'
import ReviewSwiper from './../ReviewSwiper.vue'
import MentorSwiper from './../MentorSwiper.vue'
import AboutProject from './../AboutProject.vue'
import ContactUs from './../ContactUs.vue'
import QuizInvites from '../quiz/QuizInvites.vue'
import FAQ from './../FAQ.vue'
import { useData } from '../../composables/data'

const { frontmatter } = useData()
</script>

<template>
    <ProgramIntro
    :title="frontmatter.title"
    :subtitle="frontmatter.subtitle"
    :description="frontmatter.description"
    :image_pc="frontmatter.image_pc"
    :image_mob="frontmatter.image_mob"
    :education="frontmatter.education" />

    <ProgramResult
    :title="frontmatter.result.title"
    :text="frontmatter.result.text"
    :before="frontmatter.result.before"
    :after="frontmatter.result.after"
    v-if="frontmatter.result" />

    <ProgramAudience
    :title="frontmatter.audience.title"
    :items="frontmatter.audience.items"
    v-if="frontmatter.audience" />

    <ProgramObjectives
    :title="frontmatter.objectives.title"
    :text="frontmatter.objectives.text"
    :items="frontmatter.objectives.items"
    v-if="frontmatter.objectives" />

    <ProgramContent
    :title="frontmatter.content.title"
    :subtitle="frontmatter.content.subtitle"
    :button="frontmatter.content.button"
    :link="frontmatter.content.link"
    :courses="frontmatter.content.courses"
    v-if="frontmatter.content" />

    <FormatsComparing
    v-if="frontmatter.comparing" />

    <ProgramResources
    :title="frontmatter.resources.title"
    :items="frontmatter.resources.items"
    v-if="frontmatter.resources" />

    <ProgramPrerequisites
    :title="frontmatter.prerequisites.title"
    :items="frontmatter.prerequisites.items"
    v-if="frontmatter.prerequisites" />

    <TrainingSystem
    :title="frontmatter.training.title"
    :image="frontmatter.training.image"
    :items="frontmatter.training.items"
    v-if="frontmatter.training" />

    <StartSchedule
    :title="frontmatter.schedule.title"
    :buy="frontmatter.schedule.buy"
    :program="frontmatter.schedule.program"
    :courses="frontmatter.schedule.courses"
    v-if="frontmatter.schedule" />

    <ReviewSwiper
    :title="frontmatter.reviews.title"
    :items="frontmatter.reviews.items"
    v-if="frontmatter.reviews" />

    <FAQ
    :title="frontmatter.faq.title"
    :items="frontmatter.faq.items"
    v-if="frontmatter.faq" />

    <MentorSwiper
    :title="frontmatter.mentors.title"
    :items="frontmatter.mentors.items"
    v-if="frontmatter.mentors" />

    <div class="show-more mt-0">
        <a href="/programs/" class="btn">Другие программы</a>
    </div>

    <template v-if="frontmatter.quiz">
        <QuizInvites
        v-for="name in frontmatter.quiz"
        :key="name"
        :name="name" />
    </template>

    <AboutProject v-if="false" />
    <ContactUs />
</template>
