<script setup lang="ts">
import { ref } from 'vue'
import { Quiz } from '../../interfaces'
import QuizModal from './QuizModal.vue'

import { useData } from '../../composables/data'
const { page } = useData()
const name = page.value.relativePath.replace(/^.*\/([^/]+)\.md$/, '$1')

defineProps<{
    quiz: Quiz
}>()

const inProgress = ref(false)
</script>

<template>
    <div class="quiz-start">
        <button
            class="btn"
            :data-bs-target="`#${name}`"
            data-bs-toggle="modal">
            {{ inProgress ? 'Продолжить' : 'Начать' }} квиз
        </button>
    </div>

    <QuizModal
    :name="name"
    :questions="quiz.questions"
    :footer="quiz.footer ?? undefined"
    :conclude="quiz.conclude"
    :form="quiz.form"
    :final="quiz.final"
    @start="inProgress = true"
    @finish="inProgress = false" />
</template>
