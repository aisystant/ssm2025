<script setup lang="ts">
import { ref, shallowRef, onMounted } from 'vue'
import { QuizFinal } from '../../interfaces'

const props = defineProps<{
    path: string,
}>()

const emit = defineEmits<{
    (e: 'reset'): void,
}>()

const final = ref<QuizFinal>()
const content = shallowRef(null)

onMounted(async () => {
    try {
        const page = await import(`../../../../components/quiz/${props.path}.md`)
        final.value = page.__pageData.frontmatter
        content.value = page.default

    } catch (error) {
        console.log(error)
    }
})
</script>

<template>
    <template v-if="final">
        <div class="quiz-image">
            <img :src="`/images/${final.image}`">
        </div>

        <div class="quiz-subscribe">
            <div
                class="subscribe-head text-secondary"
                v-html="final.title">
            </div>

            <div class="subscribe-body" v-if="content">
                <component :is="content" />
            </div>

            <div class="subscribe-footer">
                <button
                    type="button"
                    class="btn"
                    data-bs-dismiss="modal"
                    @click="emit('reset')">
                    {{ final.button ?? 'Завершить квиз' }}
                </button>
            </div>
        </div>
    </template>
</template>
