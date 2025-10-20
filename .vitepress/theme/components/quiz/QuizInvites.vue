<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { QuizInvites } from '../../interfaces'

const props = defineProps<{
    name: string,
}>()

const invites = ref<QuizInvites>()

onMounted(async () => {
    try {
        const page = await import(`../../../../src/quiz/${props.name}.md`)
        const fm = page.__pageData.frontmatter
        invites.value = {
            title: fm.title,
            text: fm.description,
            image: fm.cut_image,
            button: fm.button ?? undefined,
        }

    } catch (error) {
        console.log(error)
    }
})
</script>

<template>
    <section class="quiz-invites" v-if="invites">
        <div class="section-body">
            <div class="section-row">
                <div class="section-col">
                    <h2 class="quiz-title">
                        Квиз "{{ invites.title }}"
                    </h2>

                    <div
                        class="quiz-text"
                        v-html="invites.text"
                        v-if="invites.text">
                    </div>

                    <a
                        class="btn"
                        :href="`/quiz/${name}`">
                        {{ invites.button ?? 'Начать квиз' }}
                    </a>
                </div>

                <div class="section-image">
                    <img :src="`/images/${invites.image}`">
                </div>
            </div>
        </div>
    </section>
</template>
