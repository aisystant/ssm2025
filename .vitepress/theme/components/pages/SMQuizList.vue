<script setup lang="ts">
import QuizCard from '../quiz/QuizCard.vue'
import ContactUs from './../ContactUs.vue'
import { useData } from '../../composables/data'
import { quizPages } from './../../support/quizzes'

const { frontmatter } = useData()
const quizzes = quizPages
</script>

<template>
    <div class="page__content">
        <div class="page-header text-wrap">
            <h1 class="page-title">{{ frontmatter.title }}</h1>
            <div class="page-subtitle" v-html="frontmatter.subtitle" v-if="frontmatter.subtitle"></div>
        </div>

        <div class="text-content">
            <Content />
        </div>
    </div>

    <div class="quiz-section" v-if="quizzes.length">
        <div class="section-body">
            <div class="quiz-row">
                <div class="quiz-item" v-for="quiz in quizzes" :key="quiz.id">
                    <QuizCard
                    :id="quiz.id"
                    :title="quiz.title"
                    :image="quiz.image"
                    :text="quiz.text ?? undefined" />
                </div>
            </div>
        </div>
    </div>

    <ContactUs />
</template>
