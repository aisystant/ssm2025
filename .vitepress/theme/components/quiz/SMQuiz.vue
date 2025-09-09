<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Quiz } from '../../interfaces'
import QuizInvites from './QuizInvites.vue'
import QuizModal from './QuizModal.vue'
import yaml from 'js-yaml'

const props = defineProps<{
    name: string
}>()

const data = ref<Quiz | null>(null)

onMounted(async () => {
    try {
        const yamlModule = await import(`../../../../components/quiz/${props.name}.yml?raw`)
        data.value = yaml.load(yamlModule.default) as Quiz

    } catch (error) {
        console.log(error)
    }
})
</script>

<template>
    <template v-if="data">
        <QuizInvites
        :name="name"
        :data="data.invites" />

        <QuizModal
        :name="name"
        :questions="data.questions"
        :footer="data.footer"
        :conclude="data.conclude"
        :form="data.form"
        :final="data.final" />
    </template>
</template>
