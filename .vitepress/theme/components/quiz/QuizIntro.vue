<script setup lang="ts">
import { ref, shallowRef, onMounted } from 'vue'
import { QuizIntro } from '../../interfaces'

const props = defineProps<{
    path: string,
}>()

const emit = defineEmits<{
    (e: 'next'): void,
}>()

const intro = ref<QuizIntro>()
const content = shallowRef(null)

onMounted(async () => {
    try {
        const page = await import(`../../../../components/quiz/${props.path}.md`)
        intro.value = page.__pageData.frontmatter
        content.value = page.default

    } catch (error) {
        console.log(error)
    }
})
</script>

<template>
    <template v-if="intro">
        <div class="quiz-intro">
            <div class="intro-header" v-html="intro.title"></div>

            <div class="intro-body" v-if="content">
                <component :is="content" />
            </div>

            <button class="btn" @click="emit('next')">
                {{ intro.button }}
            </button>
        </div>

        <div class="intro-image">
            <img :src="`/images/${intro.image}`">
        </div>
    </template>
</template>
