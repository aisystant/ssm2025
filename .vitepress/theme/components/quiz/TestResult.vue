<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { QuizQuestion, QuizConclude, QuizResult } from '../../interfaces'
import TestResultCard from './TestResultCard.vue'

const props = defineProps<{
    questions: QuizQuestion[],
    conclude: QuizConclude,
}>()

const emit = defineEmits<{
    (e: 'update', score: number): void,
    (e: 'next'): void,
    (e: 'reset'): void,
}>()

const score = ref(0)
const error = ref(false)
const result = ref<QuizResult | null>(null)

function getLevel() {
    let level = props.questions[0].answers.find(answer => answer.checked)?.score
    if (!level) {
        error.value = true
        return
    }

    for (let i = 1; i < props.questions.length; i++) {
        if (level === 1) break

        const score = props.questions[i].answers.find(answer => answer.checked)?.score
        if (!score) continue

        if (level > score) level--
    }
    score.value = level
    return getResultByScore()
}

function calcAmount() {
    let sum = props.questions.reduce((sum, question) => {
        question.answers.forEach(answer => {
            if (answer.checked) sum += answer.score
        })
        return sum
    }, 0)
    score.value = sum
    return getResultByScore()
}

function getResultByScore() {
    const results = props.conclude.results.sort((a, b) => a.score - b.score)
    result.value = results.find(result => score.value <= result.score) ?? null
    if (!result.value) error.value = true
}

watch(score, (value) => emit('update', value))

onMounted(() => {
    if (props.conclude.mode === 'level') getLevel()
    else calcAmount()
})
</script>

<template>
    <div class="quiz-image">
        <img :src="`/images/${conclude.image}`">
    </div>

    <div class="quiz-result" v-if="result">
        <div class="result-header" v-html="result.name"></div>

        <div class="result-body">
            <template v-for="item in result.text" :key="item">
                <p v-html="item"></p>
            </template>
        </div>

        <div class="result-footer">
            <div class="result-item" v-if="conclude.action">
                <TestResultCard
                :card="conclude.action" />
            </div>

            <div class="result-item" v-if="conclude.subscribe">
                <TestResultCard
                :card="conclude.subscribe"
                @action="emit('next')" />
            </div>
        </div>
    </div>

    <div class="quiz-error" v-else-if="error">
        <div class="error-head" v-html="conclude.error.title"></div>
        <div class="error-body" v-html="conclude.error.text"></div>

        <div class="error-footer">
            <button class="btn" @click="emit('reset')">
                {{ conclude.error.button }}
            </button>
        </div>
    </div>
</template>
