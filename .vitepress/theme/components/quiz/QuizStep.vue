<script setup lang="ts">
import { computed } from 'vue'
import { QuizQuestion } from '../../interfaces'
import QuizProgress from './QuizProgress.vue'
import QuizQuestionItem from './QuizQuestionItem.vue'

const props = defineProps<{
    num: number,
    length: number,
    question: QuizQuestion,
}>()

const step = computed(() => {
    return props.num + 1
})

const lockNext = computed(() => {
    if (!props.question.required) return false
    return !props.question.answers.some(answer => answer.checked)
})

const emit = defineEmits<{
    (e: 'update', checked: number): void,
    (e: 'next'): void,
    (e: 'prev'): void,
}>()
</script>

<template>
    <div class="quiz-body">
        <QuizProgress
        :step="step"
        :length="length" />

        <div
            class="question-header"
            v-html="question.title">
        </div>

        <div class="question-body">
            <QuizQuestionItem
            v-for="(answer, i) in question.answers"
            :key="`${step}-${i}`"
            :idx="i"
            :type="question.type"
            :text="answer.text"
            :checked="answer.checked ?? false"
            @update:checked="emit('update', i)" />
        </div>

        <div class="question-footer">
            <div class="quiz-step">
                Шаг&ensp;{{ step }} / {{ length }}
            </div>

            <div class="quiz-nav">
                <button
                    class="btn btn-prev"
                    @click="emit('prev')"
                    v-if="step > 1">
                    Назад
                </button>

                <button
                    class="btn btn-next"
                    @click="emit('next')"
                    :disabled="lockNext">
                    Далее
                </button>
            </div>
        </div>
    </div>
</template>
