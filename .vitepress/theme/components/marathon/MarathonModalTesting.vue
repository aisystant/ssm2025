<script setup lang="ts">
import { ref, computed } from 'vue'
import MarathonModalHeader from './MarathonModalHeader.vue'
import yamlText from '../../../../components/marathon/testing.yml?raw'
import yaml from 'js-yaml'

const data = yaml.load(yamlText) as {
    title: string
    caption?: string
    skip?: string
    bound?: string
    submit: string
    questions: {
        name: string
        result: number
    }[]
}

const answers = ref<number[]>([])

const emit = defineEmits<{
    (e: 'update', result: number | null): void,
}>()

const valid = computed(() => {
    return data.questions.every((_, i) => i in answers.value)
})

const calcResult = () => {
    const counters = data.questions
        .reduce<Record<number, number>>((acc, question, i) => {
            if (!(question.result in acc)) acc[question.result] = 0
            if (answers.value[i] == 1) acc[question.result]++
            return acc
        }, {}
    )

    const result = Object.keys(counters)
        .map(Number)
        .reduce((key, i) => {
            return counters[i] > counters[key] ? i : key
        }, 1
    )

    return result
}
</script>

<template>
    <MarathonModalHeader
    :title="data.title" />

    <div class="modal-body">
        <div class="test-caption">
            <div
                class="col"
                v-html="data.caption"
                v-if="data.caption">
            </div>

            <div class="skip-button" v-if="data.skip">
                <button
                    type="button"
                    class="btn"
                    @click="emit('update', null)">
                    {{ data.skip }}
                </button>
            </div>
        </div>

        <div class="test-questions">
            <div
                class="questions-item"
                v-for="(question, i) in data.questions"
                :key="question.name">
                <div class="question-text">
                    <span v-html="question.name"></span>
                </div>

                <div class="question-radio">
                    <input
                        type="radio"
                        :id="`answerYes${i}`"
                        :name="`marathonQuestion${i}`"
                        v-model="answers[i]"
                        :value="1">
                    <label
                        class="btn"
                        :for="`answerYes${i}`">
                        Да
                    </label>
                </div>

                <div class="question-radio">
                    <input
                        type="radio"
                        :id="`answerNo${i}`"
                        :name="`marathonQuestion${i}`"
                        v-model="answers[i]"
                        :value="0">
                    <label
                        class="btn"
                        :for="`answerNo${i}`">
                        Нет
                    </label>
                </div>
            </div>
        </div>

        <div class="test-submit">
            <div class="btn-submit">
                <button
                    type="button"
                    class="btn"
                    @click="emit('update', calcResult())"
                    :disabled="!valid">
                    {{ data.submit }}
                </button>
            </div>

            <div class="btn-next" v-if="data.bound">
                <button
                    type="button"
                    class="btn"
                    @click="emit('update', 0)">
                    {{ data.bound }}
                </button>
            </div>
        </div>
    </div>
</template>
