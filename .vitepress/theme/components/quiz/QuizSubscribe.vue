<script setup lang="ts">
import { ref, shallowRef, onMounted } from 'vue'
import { QuizForm } from '../../interfaces'
import QuizSubscribeForm from './QuizSubscribeForm.vue'

const props = defineProps<{
    path: string,
    name: string,
    score: number,
}>()

const emit = defineEmits<{
    (e: 'next'): void,
}>()

const form = ref<QuizForm>()
const content = shallowRef(null)

onMounted(async () => {
    try {
        const page = await import(`../../../../components/quiz/${props.path}.md`)
        form.value = page.__pageData.frontmatter
        content.value = page.default

    } catch (error) {
        console.log(error)
    }
})
</script>

<template>
    <template v-if="form">
        <div class="quiz-image">
            <img :src="`/images/${form.image}`">
        </div>

        <div class="quiz-subscribe">
            <div
                class="subscribe-head"
                v-html="form.title">
            </div>

            <div class="subscribe-body" v-if="content">
                <component :is="content" />
            </div>

            <div class="subscribe-form">
                <QuizSubscribeForm
                :nameInput="form.name"
                :emailInput="form.email"
                :submitButton="form.submit"
                :note="form.note"
                :code="name"
                :score="score"
                @next="emit('next')" />
            </div>
        </div>
    </template>
</template>
