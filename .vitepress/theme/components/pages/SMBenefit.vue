<script setup lang="ts">
import BenefitIntro from './../benefit/BenefitIntro.vue'
import BenefitItem from './../benefit/BenefitItem.vue'
import CallToAction from './../CallToAction.vue'
import QuizInvites from '../quiz/QuizInvites.vue'
import { useData } from '../../composables/data'

const { frontmatter } = useData()
</script>

<template>
    <BenefitIntro
    :title="frontmatter.pagetitle ?? frontmatter.title"
    :description="frontmatter.description"
    :image="frontmatter.image" />

    <div class="yougetit-features" v-if="frontmatter.items">
        <BenefitItem
        v-for="item in frontmatter.items"
        :key="item.name"
        :name="item.name"
        :text="item.text" />
    </div>

    <CallToAction
    :title="frontmatter.action.title"
    :buttons="frontmatter.action.buttons"
    :text="frontmatter.action.text"
    v-if="frontmatter.action" />

    <template v-if="frontmatter.quiz">
        <QuizInvites
        v-for="name in frontmatter.quiz"
        :key="name"
        :name="name" />
    </template>
</template>
