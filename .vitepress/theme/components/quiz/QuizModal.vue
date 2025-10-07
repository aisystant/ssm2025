<script setup lang="ts">
import { ref } from 'vue'
import { QuizQuestion, QuizConclude } from '../../interfaces'
import QuizIntro from './QuizIntro.vue'
import QuizStep from './QuizStep.vue'
import QuizAside from './QuizAside.vue'
import TestResult from './TestResult.vue'
import QuizSubscribe from './QuizSubscribe.vue'
import QuizCompleted from './QuizCompleted.vue'
import CloseModal from '../CloseModal.vue'

const props = defineProps<{
    name: string,
    questions: QuizQuestion[],
    footer?: string,
    conclude: QuizConclude,
    intro: string,
    form: string
    final: string
}>()

const layout = ref('intro')
const num = ref(0)
const score = ref(0)

function update(checked: number) {
    const question = props.questions[num.value]
    if (question.type == 'radio') {
        question.answers.map((answer, i) => {
            answer.checked = i === checked
            return answer
        })

        setTimeout(nextStep, 100)
    }
}

function nextStep() {
    if (num.value < props.questions.length - 1) {
        ++num.value
    } else {
        layout.value = 'result'
    }

}
function prevStep() {
    --num.value
}

function reset() {
    props.questions.map(question => {
        question.answers.map(answer => {
            answer.checked = false
            return answer
        })
        return question
    })

    layout.value = 'intro'
    num.value = 0
    score.value = 0
}
</script>

<template>
    <div class="modal fade" :id="name" tabindex="-1">
        <div class="modal-dialog quiz-modal">
            <div class="modal-content">
                <div class="modal-body">
                    <CloseModal />

                    <QuizIntro
                    v-if="layout == 'intro'"
                    :path="intro"
                    @next="layout = 'testing'" />

                    <template v-else-if="layout == 'testing'">
                        <QuizStep
                        :num="num"
                        :length="questions.length"
                        :question="questions[num]"
                        @update="update"
                        @next="nextStep"
                        @prev="prevStep" />

                        <QuizAside
                        :num="num"
                        :questions="questions"
                        :footer="footer" />
                    </template>

                    <TestResult
                    v-else-if="layout == 'result'"
                    :questions="questions"
                    :conclude="conclude"
                    @update="val => score = val"
                    @next="layout = 'subscribe'"
                    @reset="reset" />

                    <QuizSubscribe
                    v-else-if="layout == 'subscribe'"
                    :path="form"
                    :name="name"
                    :score="score"
                    @next="layout = 'completion'" />

                    <QuizCompleted
                    v-else-if="layout == 'completion'"
                    :path="final"
                    @reset="reset" />
                </div>
            </div>
        </div>
    </div>
</template>
