<script setup lang="ts">
import { computed } from 'vue'
import SMQuiz from '../quiz/SMQuiz.vue'
import AnyQuestions from './../AnyQuestions.vue'
import { useData } from '../../composables/data'
const { frontmatter } = useData()

const quiz = computed(() => {
    return {
        invites: frontmatter.value.invites,
        questions: JSON.parse(JSON.stringify(frontmatter.value.questions)),
        footer: frontmatter.value.footer ?? undefined,
        conclude: frontmatter.value.conclude,
        form: frontmatter.value.form,
        final: frontmatter.value.final,
    }
})
</script>

<template>
    <div class="page__content">
        <div class="slim-body">
            <nav class="article-nav">
                <a href="/quiz/">Все квизы</a>
            </nav>

            <div class="quiz-page">
                <div class="quiz-page__row">
                    <div class="quiz-page__body">
                        <h1 class="quiz-title">
                            {{ frontmatter.title }}
                        </h1>

                        <div class="quiz-content">
                            <Content />
                        </div>

                        <SMQuiz :quiz="quiz" />
                    </div>

                    <div class="quiz-page__image">
                        <img
                            :src="`/images/${frontmatter.image}`"
                            :alt="frontmatter.title">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <AnyQuestions />
</template>
